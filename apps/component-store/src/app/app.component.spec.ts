import { createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { PersonDisplayComponent } from './components/person-display/person-display.component';

describe('AppComponent', () => {
  const createComponent = createComponentFactory({
    component: AppComponent,
    overrideComponents: [
      [
        AppComponent,
        {
          remove: { imports: [PersonDisplayComponent] },
          add: { imports: [MockComponent(PersonDisplayComponent)] },
        },
      ],
    ],
  });

  it('should create', () => {
    expect(createComponent()).toBeDefined();
  });
});
