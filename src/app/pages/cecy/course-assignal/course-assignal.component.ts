import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../../models/cecy/Course';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CecyHttpService } from "src/app/services/cecy/cecy-http.service";
import { Col } from 'src/app/models/setting/col';
import { Paginator } from 'src/app/models/setting/paginator'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { NgxSpinnerService } from 'ngx-spinner';
import { HttpParams } from '@angular/common/http';
import { TreeNode } from 'primeng/api';
@Component({
  selector: 'app-course-assignal',
  templateUrl: './course-assignal.component.html',
  styleUrls: ['./course-assignal.component.css']
})
export class CourseAssignalComponent implements OnInit {
  @Input() flagCourses: boolean;
  @Input() coursesIn: Course[];
  @Input() paginatorIn: Paginator;
  @Input() formCourseIn: FormGroup;
  @Input() displayIn: boolean;
  @Output() coursesOut = new EventEmitter<Course[]>();
  @Output() formCourseOut = new EventEmitter<FormGroup>();
  @Output() displayOut = new EventEmitter<boolean>();
  @Output() paginatorOut = new EventEmitter<Paginator>();
  selectedCourses: any[];
  dialogUploadFiles: boolean;
  dialogViewFiles: boolean;
  paginatorFiles: Paginator;
  colsCourse: Col[];
  display: boolean = false;
  updateCourseForm: FormGroup;

  openCourseForm(course: Course) {
    this.display = true;
    this.updateCourseForm.patchValue(course);
  }

  constructor(
    private cecyHttpService: CecyHttpService, private formBuilder: FormBuilder
  ) {
    this.resetPaginatorCourses();
  }

  ngOnInit() {
    this.updateCourseForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      code: [null, [Validators.required]],
      id: [null],
      hours_duration: [null, [Validators.required]],
      setec_name: [null, [Validators.required]],

    });
  }
  resetPaginatorCourses() {
    this.paginatorIn = { current_page: 1, per_page: 5 };
  }


  openEditFormCourse(course: Course) {
    this.formCourseIn.patchValue(course);
    this.formCourseOut.emit(this.formCourseIn);
    this.displayOut.emit(true);
  }

  pageChange(event) {
    this.paginatorIn.current_page = event.page + 1;
    this.paginatorOut.emit(this.paginatorIn);
  }
}
