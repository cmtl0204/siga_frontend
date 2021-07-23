import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherListComponent } from './teacher-list.component';
import { RouterModule } from '@angular/router';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [TeacherListComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ToastModule
    
  ]
})
export class TeacherListModule { }
