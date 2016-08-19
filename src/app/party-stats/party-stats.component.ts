import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-party-stats',
    template: `
      <strong>Invited:</strong> {{invited}} 
      <strong>Attending:</strong> {{attending}}
      <strong>Guests:</strong> {{guests}}
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartyStatsComponent {
    @Input() invited;
    @Input() attending;
    @Input() guests;
}
