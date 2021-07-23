import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { GeneratePDFComponent } from './generate-pdf/generate-pdf.component';

//import { ManagementComponent } from './management/management.component';
import { PairEvaluationsComponent } from './pair-evaluations/pair-evaluations.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

const routes: Routes = [
/*   {
    path: 'prueba',
    component: ManagementComponent
  }, */
/*   {
    path: 'generate-pdf',
    component: GeneratePDFComponent
  }, */
  {
    path: 'teacher-list',
    component: TeacherListComponent
  },
  {
    path: 'pair-evaluations/:id',
    component: PairEvaluationsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherEvalRoutingModule { }

// hola




