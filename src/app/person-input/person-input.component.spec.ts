/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { PersonInputComponent } from './person-input.component';

describe('Component: PersonInput', () => {
  it('should create an instance', () => {
    let component = new PersonInputComponent();
    expect(component).toBeTruthy();
  });
});
