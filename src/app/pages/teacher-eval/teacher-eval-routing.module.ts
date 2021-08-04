import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoevaluationCoordinatorAreaComponent } from './coevaluation-coordinator-area/coevaluation-coordinator-area.component';
import { CoevaluationCoordinatorComponent } from './coevaluation-coordinator/coevaluation-coordinator.component';
import { EvaluationTeacherComponent } from './evaluation-teacher/evaluation-teacher.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { HeteroevaluationComponent } from './heteroevaluation/heteroevaluation.component';
//import { GeneratePDFComponent } from './generate-pdf/generate-pdf.component';
//import { ManagementComponent } from './management/management.component';
import { PairEvaluationsComponent } from './pair-evaluations/pair-evaluations.component';
import { ResultEvaluationComponent } from './result-evaluation/result-evaluation.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

const routes: Routes = [
/*   {
    path: 'prueba',
    component: ManagementComponent
  }, */
/*   {
    path: 'generate-pdf',
    component: GeneratePDFComponent
  }, */
  {
    path: 'teacher-list',
    component: TeacherListComponent
  },
  {
    path: 'pair-evaluations/',
    component: PairEvaluationsComponent
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
  },
  {
    path: 'result-evaluation',
    component: ResultEvaluationComponent
  },
  {
    path: 'evaluation',
    component: EvaluationComponent
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherEvalRoutingModule { }

// hola




