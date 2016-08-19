import { Component, Output,OnInit,EventEmitter } from '@angular/core';

@Component({
    selector: 'app-person-input',
    template: `
      <input #personName type="text" />
      <button (click)="add(personName)">Add Person</button>
    `
})
export class PersonInputComponent {
    @Output() addPerson = new EventEmitter();

    add(personInput){
      this.addPerson.emit(personInput.value);
      personInput.value = '';
    }
}