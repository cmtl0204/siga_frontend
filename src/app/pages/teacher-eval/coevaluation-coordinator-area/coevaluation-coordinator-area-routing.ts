import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoevaluationCoordinatorAreaComponent } from './coevaluation-coordinator-area.component';

export const CoevaluationCoordinatorAreaRoutes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component: CoevaluationCoordinatorAreaComponent        
      }
    ]
  }

];


/*@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoevaluationCoordinatorAreaRoutingModule { }*/
