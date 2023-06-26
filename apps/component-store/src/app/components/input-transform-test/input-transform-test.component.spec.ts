import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTransformTestComponent } from './input-transform-test.component';

describe('InputTransformTestComponent', () => {
  let component: InputTransformTestComponent;
  let fixture: ComponentFixture<InputTransformTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTransformTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputTransformTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
