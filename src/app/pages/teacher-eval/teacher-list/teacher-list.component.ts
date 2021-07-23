import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherEvalHttpService } from 'src/app/services/teacher-eval/teacher-eval-http.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherEvalService } from 'src/app/services/teacher-eval/teacher-eval.service';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from 'src/app/models/teacher-eval/student';
import { Teacher } from 'src/app/models/app/teacher';
import * as data from '../teacher-list/mock-teacher-list.json';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  student: Estudiante = new Estudiante();
  teachers: Teacher [];
  teacher : Teacher;
  constructor(private http: HttpClient, 
    private formBuilder: FormBuilder,
    private teacherEvalService: TeacherEvalService,
    private teacherEvalHttpService: TeacherEvalHttpService,
    private router: Router) { 

    this.student.nombreEstudiante = data.nombreEstudiante;
    this.student.maestros = data.maestros;
    this.teachers = [];


  
    }


    
  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers() {
    this.teacherEvalHttpService.getTeacher('evaluation/teachers')
    .subscribe(response  =>{
      this.teachers = response['data'];
      console.log(response )
    },
      () => console.log('error')
      );
  }
  seleccionar(id: string){
console.log(id);
this.router.navigate(['teacher-eval/pair-evaluations', id])
  }

  
}
