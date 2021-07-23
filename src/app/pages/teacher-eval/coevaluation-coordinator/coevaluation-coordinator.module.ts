import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MessageService} from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { Evaluation } from 'src/app/models/teacher-eval/evaluation';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { CoevaluationCoordinatorComponent } from './coevaluation-coordinator.component';
import {Table, TableModule} from 'primeng/table';



@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    RadioButtonModule,
    FormsModule,
    ButtonModule,
    ConfirmDialogModule,
    TableModule
  ],
  declarations: [CoevaluationCoordinatorComponent],
  providers: [MessageService, ConfirmationService]

})
export class CoevaluationCoordinatorModule { }
