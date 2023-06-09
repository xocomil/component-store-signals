import { TestBed } from '@angular/core/testing';
import { PersonCountComponent } from './person-count.component';

describe(PersonCountComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(PersonCountComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(PersonCountComponent);
  });
});
