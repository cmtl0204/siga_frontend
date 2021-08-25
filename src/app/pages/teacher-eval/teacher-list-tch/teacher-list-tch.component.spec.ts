import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherListTchComponent } from './teacher-list-tch.component';

describe('TeacherListTchComponent', () => {
  let component: TeacherListTchComponent;
  let fixture: ComponentFixture<TeacherListTchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherListTchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherListTchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
