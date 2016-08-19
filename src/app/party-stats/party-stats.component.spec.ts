/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { PartyStatsComponent } from './party-stats.component';

describe('Component: PartyStats', () => {
  it('should create an instance', () => {
    let component = new PartyStatsComponent();
    expect(component).toBeTruthy();
  });
});
