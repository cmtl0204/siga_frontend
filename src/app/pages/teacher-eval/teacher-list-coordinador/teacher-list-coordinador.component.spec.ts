import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherListCoordinadorComponent } from './teacher-list-coordinador.component';

describe('TeacherListCoordinadorComponent', () => {
  let component: TeacherListCoordinadorComponent;
  let fixture: ComponentFixture<TeacherListCoordinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherListCoordinadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherListCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
