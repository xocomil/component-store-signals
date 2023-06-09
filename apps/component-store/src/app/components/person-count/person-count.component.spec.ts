import { signal } from '@angular/core';
import { createComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { PersonDisplayStateService } from '../person-display/person-display.state.service';
import { PersonCountComponent } from './person-count.component';

describe('PersonCountComponent', () => {
  const personDisplayStateServiceStub =
    (): Partial<PersonDisplayStateService> => ({
      personCount: signal(0),
    });

  const createComponent = createComponentFactory({
    component: PersonCountComponent,
    providers: [
      mockProvider(PersonDisplayStateService, personDisplayStateServiceStub()),
    ],
  });

  it('should create', () => {
    expect(createComponent()).toBeTruthy();
  });
});
