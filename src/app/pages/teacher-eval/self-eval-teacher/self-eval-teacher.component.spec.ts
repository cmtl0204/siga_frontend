import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEvalTeacherComponent } from './self-eval-teacher.component';

describe('SelfEvalTeacherComponent', () => {
  let component: SelfEvalTeacherComponent;
  let fixture: ComponentFixture<SelfEvalTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfEvalTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfEvalTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
