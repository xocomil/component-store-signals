import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person, createFakePerson } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  getPeople(numberToGenerate = 10): Observable<Person[]> {
    console.log('user got data');

    return of(Array.from({ length: numberToGenerate }, createFakePerson));
  }
}
