import { computed, inject } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { exhaustMap, pipe } from 'rxjs';
import { Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';

type PersonDisplayState = {
  people: Person[];
};

const initialState = (): PersonDisplayState => ({
  people: [],
});

export class PersonDisplayStateService extends ComponentStore<PersonDisplayState> {
  readonly #personService = inject(PersonService);

  readonly people = this.selectSignal(({ people }) => people);
  readonly personCount = computed(() => this.state().people.length);
  readonly initials = computed(() =>
    this.state()
      .people.map((person) =>
        [person.firstName.slice(0, 1), person.lastName.slice(0, 1)].join('')
      )
      .join(', ')
  );

  constructor() {
    super(initialState());
  }

  readonly getPeople = this.effect<void>(
    pipe(
      exhaustMap(() =>
        this.#personService.getPeople(Math.floor(Math.random() * 30) + 1)
      ),
      tapResponse((people) => this.patchState({ people }), console.error)
    )
  );
}
