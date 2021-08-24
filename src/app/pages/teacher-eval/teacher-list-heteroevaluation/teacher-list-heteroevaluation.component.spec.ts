import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherListHeteroevaluationComponent } from './teacher-list-heteroevaluation.component';

describe('TeacherListHeteroevaluationComponent', () => {
  let component: TeacherListHeteroevaluationComponent;
  let fixture: ComponentFixture<TeacherListHeteroevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherListHeteroevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherListHeteroevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
