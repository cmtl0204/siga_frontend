import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelfEvalCoordinadorComponent } from './self-eval-coordinador/self-eval-coordinador.component';
import { SelfEvalTeacherComponent } from './self-eval-teacher/self-eval-teacher.component'
import { EvaluationTeacherComponent } from './evaluation-teacher/evaluation-teacher.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { ResultComponent } from './result/result.component';
import { TeacherListCoordinadorComponent } from '../teacher-eval/teacher-list-coordinador/teacher-list-coordinador.component'
import { TeacherListTchComponent } from '../teacher-eval/teacher-list-tch/teacher-list-tch.component'
const routes: Routes = [


  {
    path: 'coordinador-list-selfevaluation',
    component: TeacherListCoordinadorComponent
  },
  {
    path: 'teacher-list-selfevaluation',
    component: TeacherListTchComponent
  },

// rutas de formularios de evaluacion docente 
 
  {
    path: 'selfevaluation-teahcer/:id',
    component: SelfEvalTeacherComponent
  },
  {
    path: 'selfevaluation-coordinador/:id',
    component: SelfEvalCoordinadorComponent
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
