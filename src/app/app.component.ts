import { Component,ChangeDetectionStrategy } from '@angular/core';
// import {Store} from '@ngrx/store';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/combineLatest';
import {Store} from '@ngrx/store';
import {ADD_GUEST,ADD_PERSON,REMOVE_GUEST,REMOVE_PERSON,TOGGLE_ATTENDING} from './common/actions'
import {id} from './common/id';
import {partyModel, percentAttending} from './common/selectors';

// import {people} from './reducers/people';
// import {partyFilter} from './reducers/party-filter';

// https://gist.github.com/btroncone/a6e4347326749f938510#the-sample-application
@Component({
    selector: 'app-root',
    template: `
      <h3>@ngrx/store Party Planner</h3>

      <app-party-stats
        [invited]="(model | async)?.total"
        [attending]="(model | async)?.attending"
        [guests]="(model | async)?.guests"
      >
      </app-party-stats>

      <app-filter-select (updateFilter)="updateFilter($event)"> </app-filter-select>

      <app-person-input (addPerson)="addPerson($event)" > </app-person-input>

      <app-person-list
        [people]="(model | async)?.people"
        (addGuest)="addGuest($event)"
        (removeGuest)="removeGuest($event)"
        (removePerson)="removePerson($event)"
        (toggleAttending)="toggleAttending($event)"
      >
      </app-person-list>
    `
})
export class AppComponent {
    
    public model;

    constructor(
     private _store: Store<any> //should be appstate interface
    ){
      /*
        Observable of people, utilzing the async pipe
        in our templates this will be subscribed to, with
        new values being dispayed in our template.
        Unsubscribe wil be called automatically when component
        is disposed.
      */
      // this.people = _store.select('people');

      /*
        this is a naive way to handle projecting state, we will discover a better
        Rx based solution in next lesson
        This when we filter on the person-list, filter is present on it.
      */
      // this.filter = _store.select('partyFilter');
      // this.attending = this.people.map(p => p.filter(person => person.attending));
      // this.guests = this.people
      //     .map(p => p.map(person => person.guests)
      //                .reduce((acc, curr) => acc + curr, 0));

      /*
        Every time people or partyFilter emits, pass the latest
        value from each into supplied function. We can then calculate
        and output statistics.
      */

      this.model = Observable.combineLatest(
          _store.select('people'),
          _store.select('partyFilter'),
          (people, filter) => {
          return {
            total: people.length,
            people: people.filter(filter),
            attending: people.filter(person => person.attending).length,
            guests: people.reduce((acc, curr) => acc + curr.guests, 0)
          }
        });

    }
    
    //all state-changing actions get dispatched to and handled by reducers
    addPerson(name){
      this._store.dispatch({type: ADD_PERSON, payload: {id: id(), name}})
    }

    addGuest(id){
      this._store.dispatch({type: ADD_GUEST, payload: id});
    }

    removeGuest(id){
      this._store.dispatch({type: REMOVE_GUEST, payload: id});
    }

    removePerson(id){
      this._store.dispatch({type: REMOVE_PERSON, payload: id});
    }

    toggleAttending(id){
      this._store.dispatch({type: TOGGLE_ATTENDING, payload: id})
    }

    updateFilter(filter){
      this._store.dispatch({type: filter})
    }
    /*
      if you do not use async pipe and create manual subscriptions
      always remember to unsubscribe in ngOnDestroy
    */
    // ngOnDestroy(){
    //   this.subscription.unsubscribe();
    // }
}