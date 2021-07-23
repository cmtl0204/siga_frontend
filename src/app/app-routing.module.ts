import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


// Application Components
import {AppMainComponent} from './shared/components/main/app.main.component';
import {AppBlankComponent} from './shared/components/blank/app.blank.component';
import { QuestionComponent } from './pages/teacher-eval/question/question.component';
import { TeacherEvalComponent } from './pages/teacher-eval/teacher-eval.component';
import { PairEvaluationsComponent } from './pages/teacher-eval/pair-evaluations/pair-evaluations.component';


// Application Guards
import {AuthGuard} from './shared/guards/auth.guard';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
                    {
                        path: 'teacher-eval',
                        loadChildren: () => import('./pages/teacher-eval/teacher-eval.module').then(m => m.TeacherEvalModule)
                    },
                     // ruta para mostrar el formulario
/*                     {
                        path: 'teacher-eval',
                        loadChildren: () => import('./pages/teacher-eval/question/question.module').then(m => m.QuestionModule),
                       // canActivate: [AuthGuard]
                    }, */
                    //ruta para mostrar la lista de docentes del estudiante
/*                     {
                        path: 'teacher-list',
                        loadChildren: () => import('../app/pages/teacher-eval/teacher-list/teacher-list.module').then(m => m.TeacherListModule),
                        //canActivate: [AuthGuard]
                    }, */

                    {
                        path: 'dashboard',
                        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
                        //canActivate: [AuthGuard]
                    },
                    

                    // ruta evaluacion//
                    {
                        path: 'evaluation',
                        loadChildren: () => import('./pages/teacher-eval/evaluation/evaluation.module').then(m => m.EvaluationModule),
                        canActivate: [AuthGuard]
                    },


                    //ruta tipo de hereroevaluacion
                    {
                        path: 'heteroevaluation',
                        loadChildren: () => import('./pages/teacher-eval/heteroevaluation/heteroevaluation.module').then(m => m.HeteroevaluationModule),
                       canActivate: [AuthGuard]
                    },
                      //ruta tipo de evaluacion coordinador de area
                      {
                        path: 'coevaluation-coordinator-area',
                        loadChildren: () => import('./pages/teacher-eval/coevaluation-coordinator-area/coevaluation-coordinator-area.module').then(m => m.CoevaluationCoordinatorAreaModule),
                       canActivate: [AuthGuard]
                    },
                     // ruta evaluacion coordinador 
                     {
                        path: 'coevaluation-coordinator',
                        loadChildren: () => import('./pages/teacher-eval/coevaluation-coordinator/coevaluation-coordinator.module').then(m => m.CoevaluationCoordinatorModule),
                       canActivate: [AuthGuard]
                    },

                    // ruta de evaluacion docente 
                    {
                        path: 'evaluation-teacher',
                        loadChildren: () => import('./pages/teacher-eval/evaluation-teacher/evaluation-teacher.module').then(m => m.EvaluationTeacherModule),
                       canActivate: [AuthGuard]
                    },

                    // ruta de resultados de evaluacion
                    {
                        path: 'result-evaluation',
                        loadChildren: () => import('./pages/teacher-eval/result-evaluation/result-evaluation.module').then(m => m.ResultEvaluationModule),
                       canActivate: [AuthGuard]
                    }


                   
                   /* {
                        path: 'user',
                        loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
                        canActivate: [AuthGuard]
                    }*/
                ]//ayuda

                   
            },
            {
                path: 'auth',
                component: AppBlankComponent,
                loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
            },
/*             {
                path: 'teacher-eval-home',
                component: TeacherEvalComponent,
                loadChildren: () => import('./pages/teacher-eval/teacher-eval.module').then(m => m.TeacherEvalModule)
            }, */
            {path: '**', redirectTo: '/auth/not-found'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
