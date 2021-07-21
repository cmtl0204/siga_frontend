import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EvaluationTeacherComponent } from './evaluation-teacher.component';
import { EvaluationTeacherRoutes } from './evaluation-teacher-routing';
import {MessageService} from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { Evaluation } from 'src/app/models/teacher-eval/evaluation';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';




@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(EvaluationTeacherRoutes),
    DropdownModule,
    RadioButtonModule,
    FormsModule,
    ButtonModule,
    ConfirmDialogModule,
  ],
   declarations: [EvaluationTeacherComponent],
    providers: [MessageService, ConfirmationService]
})
export class EvaluationTeacherModule { }
