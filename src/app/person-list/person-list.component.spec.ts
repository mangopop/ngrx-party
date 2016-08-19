/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { PersonListComponent } from './person-list.component';

describe('Component: PersonList', () => {
  it('should create an instance', () => {
    let component = new PersonListComponent();
    expect(component).toBeTruthy();
  });
});
