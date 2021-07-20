import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TeacherEvalRoutingModule } from './teacher-eval-routing.module';
import { ManagementComponent } from './management/management.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CheckboxModule} from 'primeng/checkbox';
import { GeneratePDFComponent } from './generate-pdf/generate-pdf.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { HeteroevaluationComponent } from './heteroevaluation/heteroevaluation.component';
import { CoevaluationCoordinatorAreaComponent } from './coevaluation-coordinator-area/coevaluation-coordinator-area.component';
import { CoevaluationCoordinatorComponent } from './coevaluation-coordinator/coevaluation-coordinator.component';
import { EvaluationTeacherComponent } from './evaluation-teacher/evaluation-teacher.component';

@NgModule({
  declarations: [
    ManagementComponent,
    GeneratePDFComponent,
    EvaluationComponent,
    HeteroevaluationComponent,
    CoevaluationCoordinatorAreaComponent,
    CoevaluationCoordinatorComponent,
    EvaluationTeacherComponent
    
],
  imports: [
    CommonModule,
    FormsModule,
    TeacherEvalRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    InputSwitchModule,
    CheckboxModule
  ]
})
export class TeacherEvalModule { }
// hola