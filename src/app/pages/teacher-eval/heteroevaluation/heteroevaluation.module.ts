import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeteroevaluationComponent } from './heteroevaluation.component';
import { HeteroevaluationRoutes } from './heteroevaluation-routing';
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
    RouterModule.forChild(HeteroevaluationRoutes),
    DropdownModule,
    RadioButtonModule,
    FormsModule,
    ButtonModule,
    ConfirmDialogModule,
  ],
   declarations: [HeteroevaluationComponent],
    providers: [MessageService, ConfirmationService]
})
export class HeteroevaluationModule {
  
 } 
