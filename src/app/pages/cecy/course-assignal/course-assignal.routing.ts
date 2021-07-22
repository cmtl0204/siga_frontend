import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import {CourseAssignalComponent } from './course-assignal.component';

export const CourseAssignalRoutes: Routes = [
  {
      path: '',
      component: CourseAssignalComponent,
      canActivate: [AuthGuard]
  },
 
];

