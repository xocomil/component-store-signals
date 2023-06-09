import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
  inject,
} from '@angular/core';
import { InitialsComponent } from '../initials/initials.component';
import { PersonCountComponent } from '../person-count/person-count.component';
import { PersonDisplayStateService } from './person-display.state.service';

@Component({
  selector: 'component-store-signals-person-display',
  standalone: true,
  template: `
    <button type="button" class="btn btn-secondary" (click)="refresh()">
      Refresh
    </button>
    <div
      *ngFor="let person of people()"
      class="border rounded border-primary p-2"
    >
      <div class="text-lg font-semibold text-jason-med">
        {{ person.firstName }} {{ person.lastName }}
      </div>
      <div class="text-sm font-light italic text-jason-light">
        {{ person.age }} years old
      </div>
      <div>
        {{ person.firstName }} likes the color {{ person.favoriteColor }}!
      </div>
    </div>
    <component-store-signals-initials />
    <component-store-signals-person-count />
  `,
  styleUrls: ['./person-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PersonDisplayStateService],
  imports: [CommonModule, InitialsComponent, PersonCountComponent],
})
export class PersonDisplayComponent implements OnInit {
  @HostBinding('class') get classBinding(): string {
    return 'w-[85%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mx-auto mt-5';
  }

  readonly #personDisplayStateService = inject(PersonDisplayStateService);

  protected readonly people = this.#personDisplayStateService.people;

  ngOnInit(): void {
    this.#personDisplayStateService.getPeople();
  }

  protected refresh() {
    this.#personDisplayStateService.getPeople();
  }
}
