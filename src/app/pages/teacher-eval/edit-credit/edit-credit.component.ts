import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { reduce } from 'rxjs/operators';
import { Teacher } from 'src/app/models/app/teacher';
import { ExtraCredit } from 'src/app/models/teacher-eval/extra-credit';
import { TeacherEvalHttpService } from 'src/app/services/teacher-eval/teacher-eval-http.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-edit-credit',
  templateUrl: './edit-credit.component.html',
  styleUrls: ['./edit-credit.component.scss']
})
export class EditCreditComponent implements OnInit {
  id: string;
  extraCredits: ExtraCredit[];
  extraCredit: any = [];
  diploma_yavirac: any;
  title_fourth_level: any;
  OCS_member: any;
  governing_processes: any;
  process_nouns: any;
  support_processes: any
  total: any;
  constructor(
    private teacherEval: TeacherEvalHttpService,
    private activeRouter: ActivatedRoute,
    private router: Router,
    private confirmationService: ConfirmationService,
  ) {
    this.extraCredits = [];
  }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(params => {
      this.id = params['id'];
      this.teacherEval.getOneCredit(this.id)
        .subscribe(
          response => {
            this.extraCredit = response['data'];
            console.log(this.extraCredit)
          },
          error => {
            console.log(error);
          }
        )
    })
  }

  actualizar(diploma_yavirac: HTMLInputElement, title_fourth_level: HTMLInputElement, OCS_member: HTMLInputElement, governing_processes: HTMLInputElement, process_nouns: HTMLInputElement, support_processes: HTMLInputElement) {

    this.diploma_yavirac = diploma_yavirac.value,
    this.title_fourth_level = title_fourth_level.value,
      this.OCS_member = OCS_member.value,
      this.governing_processes = governing_processes.value,
      this.process_nouns = process_nouns.value,
      this.support_processes = support_processes.value

    console.log(this.id);
    this.total = (parseFloat(this.diploma_yavirac) + parseFloat(this.title_fourth_level) + parseFloat(this.OCS_member) + parseFloat(this.governing_processes) + parseFloat(this.process_nouns) + parseFloat(this.support_processes));
    console.log(this.total)
    this.confirmationService.confirm({
      message: '¿Estas seguro de Actualizar ?',
      accept: () => {

        this.teacherEval.updateCredits(this.id, diploma_yavirac.value, title_fourth_level.value, OCS_member.value, governing_processes.value, process_nouns.value, support_processes.value, this.total)
          .subscribe(response => {
            console.log(response);
             alert("Actualizado con Exito");
              this.router.navigate(['teacher-eval/extra-credit']);
          },
            error => console.log(error)
          );


      }
    });



  }


}


