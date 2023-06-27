import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  inject,
} from '@angular/core';
import { RoundedBorderDirective } from '../../directives/rounded-border.directive';
import { PersonDisplayStateService } from '../person-display/person-display.state.service';

@Component({
  selector: 'component-store-signals-person-count',
  standalone: true,
  imports: [CommonModule],
  hostDirectives: [{ directive: RoundedBorderDirective }],
  template: `{{ personDisplayStateService.personCount() }} total people!`,
  styleUrls: ['./person-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonCountComponent {
  @HostBinding('class') classBinding = 'border-warning text-accent';

  protected personDisplayStateService = inject(PersonDisplayStateService);
}
