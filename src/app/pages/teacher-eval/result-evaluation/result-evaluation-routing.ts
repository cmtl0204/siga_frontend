import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResultEvaluationComponent } from './result-evaluation.component';
const routes: Routes = [];

export const ResultEvaluationRoutes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component: ResultEvaluationComponent        
      }
    ]
  }

];


/*@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultEvaluationRoutingModule { }*/
