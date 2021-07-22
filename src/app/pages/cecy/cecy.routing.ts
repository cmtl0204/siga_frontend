import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

export const CecyRouting: Routes = [
 
  {
    path: '',
    children: [
        {
            path: 'course',
            loadChildren: () => import('./course/course.module').then(m => m.CourseModule),
           canActivate: [AuthGuard]
        },
        {
            path: 'institution',
           loadChildren: () => import('./institution/institution.module').then(m => m.InstitutionModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'assignal',
           loadChildren: () => import('./course-assignal/course-assignal.module').then(m => m.CourseAssignalModule),
            canActivate: [AuthGuard]
        },
      
    ]
}
];


