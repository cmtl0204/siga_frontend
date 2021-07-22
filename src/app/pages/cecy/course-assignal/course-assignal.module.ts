import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {CourseAssignalRoutes} from './course-assignal.routing';
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// PrimeNG Modules
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {InputTextModule} from 'primeng/inputtext';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';

//my components
import { CourseAssignalComponent } from './course-assignal.component';

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(CourseAssignalRoutes),
      FormsModule,
      ReactiveFormsModule,
      InputTextModule,
      ButtonModule,
      MessagesModule,
      MessageModule,
      TooltipModule,
      DialogModule,
  ],
  declarations: [CourseAssignalComponent],
  providers: [MessageService]
})
export class CourseAssignalModule { }
