import { TestBed } from '@angular/core/testing';
import { InitialsComponent } from './initials.component';

describe(InitialsComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(InitialsComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(InitialsComponent);
  });
});
