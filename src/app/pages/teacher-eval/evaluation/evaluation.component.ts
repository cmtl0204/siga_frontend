import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherEvalHttpService } from 'src/app/services/teacher-eval/teacher-eval-http.service';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {


  
  displayModal: boolean;


  showModalDialog() {
    this.displayModal = true;
  }



  constructor(
    private teacherEval: TeacherEvalHttpService,
    private router: Router,
    private messageService: MessageService
  ) { 
     
    

      
     
  }

  // rutas de navegacion de componentes
  
  heteroevaluation(){
    this.router.navigate(['teacher-eval/teacher-list-heteroevaluation']);
   }

 coordinator(){
  this.router.navigate(['teacher-eval/teacher-list-coordinator']);
 }
 
 evaluation(){
  this.router.navigate(['teacher-eval/teacher-list-evaluation']);
 }

 coevaluation(){
  this.router.navigate(['teacher-eval/teacher-list-coevaluation']);
 }

 result(){
  this.router.navigate(['teacher-eval/result']);
 }
 


  ngOnInit(): void {


   
  }


  
      
    
  }



