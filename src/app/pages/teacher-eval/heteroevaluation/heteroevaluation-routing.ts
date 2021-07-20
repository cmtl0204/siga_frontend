import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes  } from '@angular/router';
import { HeteroevaluationComponent } from './heteroevaluation.component';


export const HeteroevaluationRoutes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component: HeteroevaluationComponent        
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
export class HeteroevaluationRoutesModule{}*/
