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
    ]
},
  {
    path: '',
    children: [
      {
        path: 'planifications',
        loadChildren: () => import('./planifications/planifications.module').then(m => m.PlanificationsModule),
        canActivate: [AuthGuard]
      },
    ]
  },
];


