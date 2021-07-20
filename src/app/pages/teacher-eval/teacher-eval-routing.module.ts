import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratePDFComponent } from './generate-pdf/generate-pdf.component';
import { ManagementComponent } from './management/management.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { HeteroevaluationComponent } from './heteroevaluation/heteroevaluation.component';
import { CoevaluationCoordinatorAreaComponent } from './coevaluation-coordinator-area/coevaluation-coordinator-area.component';
import { CoevaluationCoordinatorComponent } from './coevaluation-coordinator/coevaluation-coordinator.component';
import { EvaluationTeacherComponent } from './evaluation-teacher/evaluation-teacher.component';


const routes: Routes = [
  {
    path: 'prueba',
    component: ManagementComponent
  },
  {
    path: 'generate-pdf',
    component: GeneratePDFComponent
  },
  {
    path: 'evaluation',
    component: EvaluationComponent
  },
  {
    path: 'heteroevaluation',
    component: HeteroevaluationComponent
  },
  {
    path: 'coevaluation-coordinator-area',
    component: CoevaluationCoordinatorAreaComponent
  },
  {
    path: 'coevaluation-coordinator',
    component: CoevaluationCoordinatorComponent
  },
  {
    path: 'evaluation-teacher',
    component: EvaluationTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherEvalRoutingModule { }

// hola




