import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoevaluationCoordinatorAreaComponent } from './coevaluation-coordinator-area.component';
import { CoevaluationCoordinatorAreaRoutes } from './coevaluation-coordinator-area-routing';
import {MessageService} from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';




@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(CoevaluationCoordinatorAreaRoutes),
    DropdownModule,
    RadioButtonModule,
    FormsModule,
  ],
   declarations: [CoevaluationCoordinatorAreaComponent],
    providers: [MessageService]
})
export class CoevaluationCoordinatorAreaModule { }
