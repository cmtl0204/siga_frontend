import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/app/teacher';
import { Evaluation } from 'src/app/models/teacher-eval/evaluation';
import { TeacherEvalHttpService } from 'src/app/services/teacher-eval/teacher-eval-http.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  teachers: Teacher [];
  teacher : Teacher;
  evaluations : Evaluation [];
  evaluation : Evaluation;
  displayModal: boolean;


  showModalDialog() {
    this.displayModal = true;
  }




  constructor(
    private teacherEval: TeacherEvalHttpService,
    private router: Router,
    private messageService: MessageService
  ) { 
      this.teachers = [];
      this.evaluations = [];
  }


 home(){
  this.router.navigate(['teacher-eval/evaluation']);
 }


  ngOnInit(): void {
    this.getTeachers();

   
  }


  /*  Recuperar Docentes */
  getTeachers() {
  
    this.teacherEval.getTeacher('evaluation/teachers')
    .subscribe(response  =>{
      this.teachers = response['data'];
      console.log(response )
      
    },
      () => console.log('error')
      );
  }

  limpiar() {
    window.location.reload();
  }
  

  getEvaluations(id : string){
    this.messageService.add({
      severity: 'success',
      summary:'Evaluación',
      detail: 'Acción Realizada con Éxito'
    })
    this.teacherEval.getEvaluation(id).subscribe(
      response => {
        const datos =  this.evaluations = response['data'];
        console.log(datos)   
       // window.location.reload();

      }
      
      
    )
  }



}