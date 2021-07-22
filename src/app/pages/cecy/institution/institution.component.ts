import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CecyHttpService } from 'src/app/services/cecy/cecy-http.service';
import {Course} from 'src/app/models/cecy/Course';
import {Paginator} from 'src/app/models/setting/paginator'
import { MessageService } from 'src/app/services/app/message.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit {
 
  paginator: Paginator;
  courses: Course[];
  formCourse: FormGroup;
  course: Course;
  courseDialog: boolean;
  flagCourses: boolean;
 
  constructor(
       private spinnerService: NgxSpinnerService,
        private messageService: MessageService,
        private formBuilder: FormBuilder,
        private cecyHttpService: CecyHttpService,
  ) { 
    this.paginator = { current_page: 1, per_page: 5 };
    this.courses = [];
  }

  
  ngOnInit() {
    this.getCourses(this.paginator);
    this.buildFormCourse();
  }

  buildFormCourse() {
    this.formCourse = this.formBuilder.group({
        id: [null],
        name: [null, Validators.required],
        status: [null, Validators.required],
    });
}

  getCourses(paginator: Paginator) {
    const params = new HttpParams() 
        .append('page', paginator.current_page.toString())
        .append('per_page', paginator.per_page.toString());
    this.flagCourses = true;
    this.cecyHttpService.get('course/all', params).subscribe(
        response => {
            this.flagCourses = false;
            this.courses = response['data'];
            console.log(this.courses);
            this.paginator = response as Paginator;
        }, error => {
            this.flagCourses = false;
            this.messageService.error(error);
        });
}



}
