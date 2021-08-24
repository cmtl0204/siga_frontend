import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherListCoevaluationComponent } from './teacher-list-coevaluation.component';

describe('TeacherListCoevaluationComponent', () => {
  let component: TeacherListCoevaluationComponent;
  let fixture: ComponentFixture<TeacherListCoevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherListCoevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherListCoevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
