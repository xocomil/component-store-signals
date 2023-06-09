import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MockComponent, MockProvider } from 'ng-mocks';
import { InitialsComponent } from '../initials/initials.component';
import { PersonCountComponent } from '../person-count/person-count.component';
import { PersonDisplayComponent } from './person-display.component';
import { PersonDisplayStateService } from './person-display.state.service';

describe(PersonDisplayComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(PersonDisplayComponent, {
      remove: {
        providers: [PersonDisplayStateService],
        imports: [InitialsComponent, PersonCountComponent],
      },
      add: {
        providers: [
          MockProvider(PersonDisplayStateService, {
            people: signal([]),
            getPeople: cy.spy().as('getPeople'),
          }),
        ],
        imports: [
          MockComponent(InitialsComponent),
          MockComponent(PersonCountComponent),
        ],
      },
    });
  });

  it('renders', () => {
    cy.mount(PersonDisplayComponent).then(() => {
      cy.get('@getPeople').should('be.calledOnce');
    });
  });

  it('should call getPeople() when button is clicked', () => {
    cy.mount(PersonDisplayComponent).then(() => {
      cy.get('@getPeople')
        .should('be.calledOnce')
        .then(() => {
          cy.get('.btn')
            .click()
            .then(() => {
              cy.get('@getPeople').should('be.calledTwice');
            });
        });
    });
  });
});
