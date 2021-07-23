import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { PairEvaluationsComponent } from './pair-evaluations/pair-evaluations.component';
import { QuestionComponent } from './question/question.component';
import { TeacherEvalComponent } from './teacher-eval.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { HeteroevaluationComponent } from './heteroevaluation/heteroevaluation.component';
import { CoevaluationCoordinatorAreaComponent} from './coevaluation-coordinator-area/coevaluation-coordinator-area.component'
import { CoevaluationCoordinatorComponent } from './coevaluation-coordinator/coevaluation-coordinator.component';
import { EvaluationTeacherComponent } from './evaluation-teacher/evaluation-teacher.component';
import { ResultEvaluationComponent } from './result-evaluation/result-evaluation.component';



const routes: Routes = [


];
/* const TeacherEvalRouting: Routes = [
  {
      path: '',
      children: [

          {
            path: 'question',
            component:QuestionComponent
            //loadChildren:()=>import('./question/question.module').then(m=>m.QuestionModule),
            //canActivate:[AuthGuard] 
        },
        {
          path: 'pair-evaluations/:id',
          component:PairEvaluationsComponent
        },
        {
          path: 'teacher-list',
          component:TeacherListComponent
          //loadChildren:()=>import('./question/question.module').then(m=>m.QuestionModule),
          //canActivate:[AuthGuard] 
      },
      {
        path: 'evaluation',
        component:EvaluationComponent
        //loadChildren:()=>import('./question/question.module').then(m=>m.QuestionModule),
        //canActivate:[AuthGuard] 
    },
    {
      path: 'heteroevaluation',
      component:HeteroevaluationComponent
      //loadChildren:()=>import('./question/question.module').then(m=>m.QuestionModule),
      //canActivate:[AuthGuard] 
  },
    
  {
     path: 'coevaluation-coordinator-area',
     component:CoevaluationCoordinatorAreaComponent
  //loadChildren:()=>import('./question/question.module').then(m=>m.QuestionModule),
  //canActivate:[AuthGuard] 
},
{
  path: 'coevaluation-coordinator',
  component:CoevaluationCoordinatorComponent
//loadChildren:()=>import('./question/question.module').then(m=>m.QuestionModule),
//canActivate:[AuthGuard] 
},
{
path: 'evaluation-teacher',
component:EvaluationTeacherComponent
//loadChildren:()=>import('./question/question.module').then(m=>m.QuestionModule),
//canActivate:[AuthGuard] 
},
{
path: 'result-evaluation',
component:ResultEvaluationComponent
//loadChildren:()=>import('./question/question.module').then(m=>m.QuestionModule),
//canActivate:[AuthGuard] 
}


      ]
  }
]; */

