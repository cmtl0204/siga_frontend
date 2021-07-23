import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionComponent } from './question/question.component';

import { TeacherEvalRoutingModule } from './teacher-eval-routing.module';
//import { ManagementComponent } from './management/management.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CheckboxModule} from 'primeng/checkbox';
//import { GeneratePDFComponent } from './generate-pdf/generate-pdf.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { PairEvaluationsComponent } from './pair-evaluations/pair-evaluations.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {Message,MessageService} from 'primeng/api';
import {RadioButtonModule} from 'primeng/radiobutton'; 
import {Toast, ToastModule} from 'primeng/toast';
import { toBase64String } from '@angular/compiler/src/output/source_map';



@NgModule({
  declarations: [
    QuestionComponent,
    TeacherListComponent,
    PairEvaluationsComponent,
    
  ],
  providers:[
    ConfirmationService
  ],
    imports: [
    CommonModule,
    FormsModule,
    //ManagementComponent,
    //GeneratePDFComponent,
    TeacherEvalRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    InputSwitchModule,
    CheckboxModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    RadioButtonModule,
    ToastModule

  ]
})
export class TeacherEvalModule { }
// hola