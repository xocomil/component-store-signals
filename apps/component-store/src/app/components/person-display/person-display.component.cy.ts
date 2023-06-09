import { TestBed } from '@angular/core/testing';
import { PersonDisplayComponent } from './person-display.component';

describe(PersonDisplayComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(PersonDisplayComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(PersonDisplayComponent);
  });
});
