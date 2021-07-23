import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { PairEvaluationsComponent } from './pair-evaluations/pair-evaluations.component';
import { QuestionComponent } from './question/question.component';
import { TeacherEvalComponent } from './teacher-eval.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';


const routes: Routes = [


];
/* const TeacherEvalRouting: Routes = [
  {
      path: '',
      children: [

          {
            path: 'eval-studen-teacher',
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
      ]
  }
]; */

