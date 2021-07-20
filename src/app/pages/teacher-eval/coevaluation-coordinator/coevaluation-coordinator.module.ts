import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoevaluationCoordinatorRoutes} from './coevaluation-coordinator-routing'
import { CoevaluationCoordinatorComponent } from './coevaluation-coordinator.component';
import {MessageService} from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';



@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(CoevaluationCoordinatorRoutes),
    DropdownModule,
    RadioButtonModule,
    FormsModule,
  ],
   declarations: [CoevaluationCoordinatorComponent],
    providers: [MessageService]
})

export class CoevaluationCoordinatorModule { }
