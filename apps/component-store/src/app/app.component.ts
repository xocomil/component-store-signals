import { Component } from '@angular/core';
import { PersonDisplayComponent } from './components/person-display/person-display.component';

@Component({
  standalone: true,
  imports: [PersonDisplayComponent],
  selector: 'component-store-signals-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
