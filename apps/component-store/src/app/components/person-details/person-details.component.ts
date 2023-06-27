/* eslint-disable @angular-eslint/no-host-metadata-property */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PrimaryBorderDirective } from '../../directives/primary-border.directive';
import { Person } from '../../models/person.model';

@Component({
  selector: 'component-store-signals-person-details',
  standalone: true,
  imports: [CommonModule],
  hostDirectives: [PrimaryBorderDirective],
  host: {
    class: 'border-primary',
  },
  template: `
    <div class="text-lg font-semibold text-jason-med">
      {{ person.firstName }} {{ person.lastName }}
    </div>
    <div class="text-sm font-light italic text-jason-light">
      {{ person.age }} years old
    </div>
    <div>
      {{ person.firstName }} likes the color {{ person.favoriteColor }}!
    </div>
  `,
  styleUrls: ['./person-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonDetailsComponent {
  @Input({ required: true }) person!: Person;
}
