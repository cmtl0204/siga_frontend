import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoevaluationCoordinatorComponent } from './coevaluation-coordinator.component';
import { CoevaluationCoordinatorRoutes } from './coevaluation-coordinator-routing';
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
    RouterModule.forChild(CoevaluationCoordinatorRoutes),
    DropdownModule,
    RadioButtonModule,
    FormsModule,
    ButtonModule,
    ConfirmDialogModule,
  ],
   declarations: [CoevaluationCoordinatorComponent],
    providers: [MessageService, ConfirmationService]
})

export class CoevaluationCoordinatorModule { }
