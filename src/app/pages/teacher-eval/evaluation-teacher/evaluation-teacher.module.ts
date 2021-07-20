import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EvaluationTeacherRoutes } from './evaluation-teacher-routing';
import { EvaluationTeacherComponent } from './evaluation-teacher.component';
import {MessageService} from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';



@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(EvaluationTeacherRoutes),
    DropdownModule,
    RadioButtonModule,
    FormsModule,
  ],
   declarations: [EvaluationTeacherComponent],
    providers: [MessageService]
})
export class EvaluationTeacherModule { }
