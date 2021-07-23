import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoevaluationCoordinatorComponent } from './coevaluation-coordinator.component';

describe('CoevaluationCoordinatorComponent', () => {
  let component: CoevaluationCoordinatorComponent;
  let fixture: ComponentFixture<CoevaluationCoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoevaluationCoordinatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoevaluationCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
