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


  constructor(private teacherEval: TeacherEvalHttpService,
              private router: Router,
              private messageService: MessageService) { }

    // rutas de navegacion de componentes
  
    selfEvalTeacher(){
      this.router.navigate(['teacher-eval/self-eval-teacher']);
     }
  
   coordinator(){
    this.router.navigate(['teacher-eval/self-eval-coordinador']);
   }
   
   evaluation(){
    this.router.navigate(['teacher-eval/evaluation']);
   }
  
   result(){
    this.router.navigate(['teacher-eval/result']);
   }
   

  ngOnInit(): void {
  }

}
