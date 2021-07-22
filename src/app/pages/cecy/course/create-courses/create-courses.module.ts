import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';
import { AccordionModule } from 'primeng/accordion';
import { CreateCoursesComponent } from '../create-courses/create-courses.component';
import { CourseComponent } from '../course.component';
import { ButtonModule } from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [
    CreateCoursesComponent,
    CourseComponent,

  ],
  imports: [
    CommonModule,
    DialogModule,
    TreeModule,
    AccordionModule,
    ButtonModule,
    DropdownModule
  ]
})
export class CreateCoursesModule { }
