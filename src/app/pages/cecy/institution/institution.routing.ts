import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { InstitutionComponent } from './institution.component';

export const InstitutionRoutes: Routes = [
  {
      path: '',
      component: InstitutionComponent,
      canActivate: [AuthGuard]
  },
 
];

