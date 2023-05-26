import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'component-store-signals-person-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-display.component.html',
  styleUrls: ['./person-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonDisplayComponent implements OnInit, OnDestroy {
  @HostBinding('class') get classBinding(): string {
    return 'w-[85%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mx-auto';
  }

  readonly #personService = inject(PersonService);
  readonly #destroyed$ = new Subject<void>();

  protected people: Person[] = [];

  ngOnInit(): void {
    this.#personService
      .getPeople(25)
      .pipe(takeUntil(this.#destroyed$))
      .subscribe((people: Person[]) => {
        this.people = people;
      });
  }

  ngOnDestroy(): void {
    this.#destroyed$.next();
    this.#destroyed$.complete();
  }
}
