import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssignalComponent } from './course-assignal.component';

describe('CourseAssignalComponent', () => {
  let component: CourseAssignalComponent;
  let fixture: ComponentFixture<CourseAssignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAssignalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAssignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
