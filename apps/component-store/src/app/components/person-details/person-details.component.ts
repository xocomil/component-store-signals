import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { Person } from '../../models/person.model';

@Component({
  selector: 'component-store-signals-person-details',
  standalone: true,
  imports: [CommonModule],
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
  @HostBinding('class') classBinding = 'border rounded border-primary p-2';

  @Input({ required: true }) person!: Person;
}
