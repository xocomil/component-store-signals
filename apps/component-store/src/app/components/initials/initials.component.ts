import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  inject,
} from '@angular/core';
import { RoundedBorderDirective } from '../../directives/rounded-border.directive';
import { PersonDisplayStateService } from './../person-display/person-display.state.service';

@Component({
  selector: 'component-store-signals-initials',
  standalone: true,
  imports: [CommonModule],
  template: `{{ personDisplayStateService.initials() }}`,
  hostDirectives: [{ directive: RoundedBorderDirective }],
  styleUrls: ['./initials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InitialsComponent {
  @HostBinding('class') classBinding = 'border-jason-med text-accent';

  protected personDisplayStateService = inject(PersonDisplayStateService);
}
