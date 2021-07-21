import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { reduce } from 'rxjs/operators';
import { Teacher } from 'src/app/models/app/teacher';
import { Research } from 'src/app/models/teacher-eval/research';
import { TeacherEvalHttpService } from 'src/app/services/teacher-eval/teacher-eval-http.service';
import { ConfirmationService } from 'primeng/api';
import { error } from 'protractor';

@Component({
  selector: 'app-edit-investigation',
  templateUrl: './edit-investigation.component.html',
  styleUrls: ['./edit-investigation.component.css']
})
export class EditInvestigationComponent implements OnInit {
  id: string;
  researchs : Research[];
  research : Research;
  inv_auto_eval : any;
  inv_pares : any;
  inv_coodinador : any;
  total : any;

  constructor(
    private teacherEval: TeacherEvalHttpService,
    private activeRouter: ActivatedRoute,
    private router: Router,
    private confirmationService: ConfirmationService,
  ) { 
    this.researchs = [];
  }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(
      params => {
        this.id = params['id'];
        this.teacherEval.getOneResearch(this.id)
        .subscribe(
          response => {
            this.research = response['data'];
            console.log(this.research)
          },
          error => {
            console.log(error);
          }
        )
      }
    )

  }


  actualizar(inv_auto_eval: HTMLInputElement, inv_pares: HTMLInputElement, inv_coodinador: HTMLInputElement){
      this.inv_auto_eval = inv_auto_eval.value,
      this.inv_pares = inv_pares.value,
      this.inv_coodinador = inv_coodinador.value

      this.total =  (((parseFloat(this.inv_auto_eval)*0.20) + (parseFloat(this.inv_pares)*0.50) + (parseFloat(this.inv_coodinador)*0.30)));
      console.log(this.total)
      this.confirmationService.confirm({
        message : '¿Estas seguro de Actualizar ?',
        accept : () => {
          this.teacherEval.updateResearch(this.id, inv_auto_eval.value, inv_pares.value, inv_coodinador.value, this.total)
          .subscribe( 
            response => {
              console.log(response);
              alert("Actualizado con Exito");
              this.router.navigate(['teacher-eval/investigation']);
            },
            error => console.log(error)
          );
        }
      });
  }


}
