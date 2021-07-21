import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuestionRoutes } from './question-routing';
import { QuestionComponent } from './question.component';
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
    RouterModule.forChild(QuestionRoutes),
    DropdownModule,
    RadioButtonModule,
    FormsModule,
    ButtonModule,
    ConfirmDialogModule,
    
    
    
  ],
   declarations: [QuestionComponent],
    providers: [MessageService, ConfirmationService]
})
export class QuestionModule {
  
 } 
