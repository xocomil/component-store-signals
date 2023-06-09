import { Component } from '@angular/core';
import { InputTransformTestComponent } from './components/input-transform-test/input-transform-test.component';
import { PersonDisplayComponent } from './components/person-display/person-display.component';

@Component({
  standalone: true,
  imports: [PersonDisplayComponent, InputTransformTestComponent],
  selector: 'component-store-signals-root',
  template: `<component-store-signals-person-display />`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  favoriteNumber = 12345;
}
