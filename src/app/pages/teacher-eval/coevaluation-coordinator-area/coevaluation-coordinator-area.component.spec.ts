import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoevaluationCoordinatorAreaComponent } from './coevaluation-coordinator-area.component';

describe('CoevaluationCoordinatorAreaComponent', () => {
  let component: CoevaluationCoordinatorAreaComponent;
  let fixture: ComponentFixture<CoevaluationCoordinatorAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoevaluationCoordinatorAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoevaluationCoordinatorAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
