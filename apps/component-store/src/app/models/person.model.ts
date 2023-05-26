import { faker } from '@faker-js/faker/locale/en';

export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  favoriteColor: string;
};

export const createFakePerson = (): Person => ({
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  age: faker.number.int({ min: 6, max: 120 }),
  email: faker.internet.email(),
  favoriteColor: faker.helpers.arrayElement(['red', 'blue', 'green']),
});
