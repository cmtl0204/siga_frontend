import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeteroevaluationRoutes } from './heteroevaluation-routing';
import { HeteroevaluationComponent } from './heteroevaluation.component';
import {MessageService} from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';


@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(HeteroevaluationRoutes),
    DropdownModule,
    RadioButtonModule,
    FormsModule,
  ],
   declarations: [HeteroevaluationComponent],
    providers: [MessageService]
})
export class HeteroevaluationModule {
  
 } 
