import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes  } from '@angular/router';
import { EvaluationTeacherComponent } from './evaluation-teacher.component';


export const EvaluationTeacherRoutes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component: EvaluationTeacherComponent        
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
export class EvaluationTeacherRoutingModule { }
*/
