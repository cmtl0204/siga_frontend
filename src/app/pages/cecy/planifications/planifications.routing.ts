import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import {PlanificationsComponent} from './planifications.component';
import {DetailsComponent} from './details/details.component';
import {RegistrationComponent} from './registration/registration.component';

export const PlanificationsRouting: Routes = [
  {
    path: '',
    component: PlanificationsComponent,
    canActivate: [AuthGuard]
  }, {
    path: ':id',
    component: DetailsComponent,
  }, {
    path: 'registration/:id',
    component: RegistrationComponent,
  }
];
