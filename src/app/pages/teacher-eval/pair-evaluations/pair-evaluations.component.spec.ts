import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairEvaluationsComponent } from './pair-evaluations.component';

describe('PairEvaluationsComponent', () => {
  let component: PairEvaluationsComponent;
  let fixture: ComponentFixture<PairEvaluationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PairEvaluationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PairEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
