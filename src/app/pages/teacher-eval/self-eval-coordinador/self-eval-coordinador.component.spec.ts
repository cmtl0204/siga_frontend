import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEvalCoordinadorComponent } from './self-eval-coordinador.component';

describe('SelfEvalCoordinadorComponent', () => {
  let component: SelfEvalCoordinadorComponent;
  let fixture: ComponentFixture<SelfEvalCoordinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfEvalCoordinadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfEvalCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
