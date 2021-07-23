import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoursesRoutingModule } from './courses-routing.module';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CoursesComponent } from './courses.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { CourseCreationComponent } from './course-creation/course-creation.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';



@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    TabViewModule,
    OverlayPanelModule,
    InputTextModule,
    InputTextareaModule,
    AutoCompleteModule,
    InputNumberModule,
    CalendarModule,
    SelectButtonModule,
    ToolbarModule,
    DialogModule,
    PaginatorModule,
    
  ],
  declarations: [
    CoursesComponent,
    AssignmentComponent,
    CourseCreationComponent
  ]
})
export class CoursesModule { }
