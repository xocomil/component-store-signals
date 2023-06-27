/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Directive } from '@angular/core';
import { RoundedBorderDirective } from './rounded-border.directive';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[primaryBorder]',
  standalone: true,
  host: {
    class: 'border-primary',
  },
  hostDirectives: [RoundedBorderDirective],
})
export class PrimaryBorderDirective {}
