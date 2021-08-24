import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherListCoordinatorComponent } from './teacher-list-coordinator.component';

describe('TeacherListCoordinatorComponent', () => {
  let component: TeacherListCoordinatorComponent;
  let fixture: ComponentFixture<TeacherListCoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherListCoordinatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherListCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
