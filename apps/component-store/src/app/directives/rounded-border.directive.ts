/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[roundedBorder]',
  standalone: true,
  host: {
    class: 'border rounded p-2',
  },
})
export class RoundedBorderDirective {}
