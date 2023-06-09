import { WritableSignal, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { PersonDisplayStateService } from '../person-display/person-display.state.service';
import { PersonCountComponent } from './person-count.component';

describe(PersonCountComponent.name, () => {
  let personCount: WritableSignal<number>;

  beforeEach(() => {
    personCount = signal(0);

    TestBed.overrideComponent(PersonCountComponent, {
      add: {
        imports: [],
        providers: [MockProvider(PersonDisplayStateService, { personCount })],
      },
    });
  });

  it('should change based on signal', () => {
    cy.mount(PersonCountComponent).then((mount) => {
      cy.get('[data-cy-root]')
        .should('have.text', '0 total people!')
        .then(() => {
          personCount.set(12);
          mount.fixture.detectChanges();

          cy.get('#root0').should('have.text', '12 total people!');
        });
    });
  });

  it('renders', () => {
    cy.mount(PersonCountComponent).then((mount) => {
      mount.fixture.detectChanges();

      cy.get('[data-cy-root]').should('have.text', '0 total people!');
    });
  });
});
