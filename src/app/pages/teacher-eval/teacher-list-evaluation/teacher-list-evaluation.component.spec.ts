import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherListEvaluationComponent } from './teacher-list-evaluation.component';

describe('TeacherListEvaluationComponent', () => {
  let component: TeacherListEvaluationComponent;
  let fixture: ComponentFixture<TeacherListEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherListEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherListEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
