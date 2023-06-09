import { signal } from '@angular/core';
import { createComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { PersonDisplayComponent } from './person-display.component';
import { PersonDisplayStateService } from './person-display.state.service';

describe('PersonDisplayComponent', () => {
  const personDisplayStateServiceStub =
    (): Partial<PersonDisplayStateService> => ({
      people: signal([]),
    });

  const createComponent = createComponentFactory({
    component: PersonDisplayComponent,
    providers: [
      mockProvider(PersonDisplayStateService, personDisplayStateServiceStub()),
    ],
  });

  it('should create', () => {
    expect(createComponent()).toBeTruthy();
  });
});
