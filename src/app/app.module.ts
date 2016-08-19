import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { PersonListComponent } from './person-list/person-list.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { FilterSelectComponent } from './filter-select/filter-select.component';

import { Store, StoreModule } from '@ngrx/store';
import {provideStore} from "@ngrx/store";
import * as APP_REDUCERS from "./reducers/reducers";

import { PartyStatsComponent } from './party-stats/party-stats.component';




@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonInputComponent,
    FilterSelectComponent,
    PartyStatsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    StoreModule.provideStore(APP_REDUCERS),
    // PersonListComponent, //get very unhelpful type error here 
    // PersonInputComponent,
    // FilterSelectComponent
    
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
