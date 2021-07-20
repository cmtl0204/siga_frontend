import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes  } from '@angular/router';
import { CoevaluationCoordinatorComponent } from './coevaluation-coordinator.component';



export const CoevaluationCoordinatorRoutes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component: CoevaluationCoordinatorComponent        
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
export class CoevaluationCoordinatorRoutingModule { }*/
