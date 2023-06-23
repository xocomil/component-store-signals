import { CommonModule } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  HostBinding,
  inject,
  Injector,
  Input,
  numberAttribute,
  OnInit,
  runInInjectionContext,
  signal,
} from '@angular/core';

function getColorString(value: any): string {
  console.log('set color', value);

  if (!value) {
    return 'No preference';
  }

  return '' + value;
}

@Component({
  selector: 'component-store-signals-input-transform-test',
  standalone: true,
  imports: [CommonModule],
  template: `<span [class.font-bold]="bold" [class.text-xl]="large"
      >Color:</span
    >
    {{ color }}
    <br />
    <span [class.font-bold]="bold">Favorite Number:</span> {{ favoriteNumber
    }}<br />
    <span [class.font-bold]="bold" [class.pink]="pink"
      >Second Favorite Number:</span
    >
    {{ secondFavoriteNumber }}<br />
    <strong>signal:</strong> {{ signalInput() }}
    <button (click)="add10()" class="btn btn-accent">Add 10</button>`,
  styleUrls: ['./input-transform-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTransformTestComponent implements OnInit {
  @HostBinding('class') classBinding =
    'border rounded border-secondary p-2 m-4';

  @Input({ transform: getColorString }) color = '';

  @Input({ transform: (value: any) => numberAttribute(value, 2) })
  favoriteNumber = -999;

  @Input({
    transform: (value: any) => numberAttribute(value, 13),
  })
  secondFavoriteNumber = -998;

  @Input({ transform: booleanAttribute }) bold = false;
  @Input({ transform: booleanAttribute }) large = false;
  @Input({ transform: booleanAttribute }) pink = false;

  @Input({ transform: (value: number) => signal(value) }) signalInput =
    signal(5);

  #injector = inject(Injector);

  ngOnInit() {
    runInInjectionContext(this.#injector, () => {
      effect(() => {
        console.log('signalInput', this.signalInput());
      });
    });

    console.log('computed', computed(() => this.signalInput() * 2)());

    this.signalInput.update((val) => val + 10);
    console.log('computed 2', computed(() => this.signalInput() * 2)());
  }

  protected add10() {
    this.signalInput.update((val) => val + 10);
  }
}
