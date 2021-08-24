import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoevaluationCoordinatorAreaComponent } from './coevaluation-coordinator-area/coevaluation-coordinator-area.component';
import { CoevaluationCoordinatorComponent } from './coevaluation-coordinator/coevaluation-coordinator.component';
import { EvaluationTeacherComponent } from './evaluation-teacher/evaluation-teacher.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { HeteroevaluationComponent } from './heteroevaluation/heteroevaluation.component';
import { ResultComponent } from './result/result.component';
import { TeacherListCoevaluationComponent } from './teacher-list-coevaluation/teacher-list-coevaluation.component';
import { TeacherListCoordinatorComponent } from './teacher-list-coordinator/teacher-list-coordinator.component';
import { TeacherListEvaluationComponent } from './teacher-list-evaluation/teacher-list-evaluation.component';
import { TeacherListHeteroevaluationComponent } from './teacher-list-heteroevaluation/teacher-list-heteroevaluation.component';


const routes: Routes = [


  {
    path: 'teacher-list-heteroevaluation',
    component: TeacherListHeteroevaluationComponent
  },
  {
    path: 'teacher-list-coordinator',
    component: TeacherListCoordinatorComponent
  },
  {
    path: 'teacher-list-evaluation',
    component: TeacherListEvaluationComponent
  },
  {
    path: 'teacher-list-coevaluation',
    component: TeacherListCoevaluationComponent
  },

// rutas de formularios de evaluacion docente 
 
  {
    path: 'heteroevaluation/:id',
    component: HeteroevaluationComponent
  },
  {
    path: 'coevaluation-coordinator-area/:id',
    component: CoevaluationCoordinatorAreaComponent
  },
  {
    path: 'coevaluation-coordinator/:id',
    component: CoevaluationCoordinatorComponent
  },
  {
    path: 'evaluation-teacher/:id',
    component: EvaluationTeacherComponent
  },


  // rutas de evaluacion y resultado
  {
    path: 'evaluation',
    component: EvaluationComponent
  },
  {
    path: 'result',
    component: ResultComponent
  }
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherEvalRoutingModule { }

// hola




