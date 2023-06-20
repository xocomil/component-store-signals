import { createServiceFactory, mockProvider } from '@ngneat/spectator/jest';
import { Subject, defer, of } from 'rxjs';
import { Person, createFakePerson } from '../../models/person.model';
import { PersonService } from '../../services/person.service';
import { PersonDisplayStateService } from './person-display.state.service';

describe('PersonDisplayStateService', () => {
  const getPeople$ = new Subject<Person[]>();

  const personServiceStub = (): Partial<PersonService> => ({
    getPeople: jest.fn().mockReturnValue(getPeople$),
  });

  const createService = createServiceFactory({
    service: PersonDisplayStateService,
    providers: [mockProvider(PersonService, personServiceStub())],
  });

  it('should be created', () => {
    const spectator = createService();

    expect(spectator).toBeDefined();
  });

  describe('personCount', () => {
    it('should start as 0', () => {
      const spectator = createService();

      expect(spectator.service.personCount()).toBe(0);
    });

    it('should change when people are added', () => {
      const spectator = createService();

      spectator.service.getPeople();

      getPeople$.next(Array.from({ length: 5 }));

      expect(spectator.service.personCount()).toBe(5);
    });
  });

  describe('initials', () => {
    it('should start as empty string', () => {
      const spectator = createService();

      expect(spectator.service.initials()).toBe('');
    });

    it('should give the initials', () => {
      const people = [
        createFakePerson({ firstName: 'Jason', lastName: 'Warner' }),
        createFakePerson({ firstName: 'Quantarius', lastName: 'Ray' }),
        createFakePerson({ firstName: 'Chau', lastName: 'Tran' }),
      ];

      const spectator = createService({
        providers: [
          mockProvider(PersonService, {
            getPeople: () => defer(() => of(people)),
          }),
        ],
      });

      spectator.service.getPeople();

      expect(spectator.service.initials()).toBe('JW, QR, CT');
    });
  });

  describe('getPeople', () => {
    it('should call the PersonService.getPeople()', () => {
      const spectator = createService({
        providers: [mockProvider(PersonService, personServiceStub())],
      });
      const personService = spectator.inject(PersonService);

      spectator.service.getPeople();

      expect(personService.getPeople).toHaveBeenCalledTimes(1);
    });

    it('should put results in the state', () => {
      const people = [
        createFakePerson({ firstName: 'Jason', lastName: 'Warner' }),
        createFakePerson({ firstName: 'Quantarius', lastName: 'Ray' }),
        createFakePerson({ firstName: 'Chau', lastName: 'Tran' }),
      ];

      const spectator = createService({
        providers: [
          mockProvider(PersonService, {
            getPeople: () => defer(() => of(people)),
          }),
        ],
      });

      spectator.service.getPeople();

      expect(spectator.service.people()).toEqual(people);
    });
  });
});
