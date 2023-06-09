import { signal } from '@angular/core';
import { createComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { PersonDisplayStateService } from '../person-display/person-display.state.service';
import { InitialsComponent } from './initials.component';

describe('InitialsComponent', () => {
  const personDisplayStateServiceStub =
    (): Partial<PersonDisplayStateService> => ({
      initials: signal('JW'),
    });

  const createComponent = createComponentFactory({
    component: InitialsComponent,
    providers: [
      mockProvider(PersonDisplayStateService, personDisplayStateServiceStub()),
    ],
  });

  it('should create', () => {
    const spectator = createComponent();

    expect(spectator).toBeDefined();
  });
});
