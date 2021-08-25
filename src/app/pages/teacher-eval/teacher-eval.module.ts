import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeacherEvalRoutingModule } from './teacher-eval-routing.module';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CheckboxModule} from 'primeng/checkbox';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {RadioButtonModule} from 'primeng/radiobutton'; 
import {Toast, ToastModule} from 'primeng/toast';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {Message,MessageService} from 'primeng/api';
import { SelfEvalTeacherComponent } from './self-eval-teacher/self-eval-teacher.component';
import { SelfEvalCoordinadorComponent } from './self-eval-coordinador/self-eval-coordinador.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { EvaluationTeacherComponent } from './evaluation-teacher/evaluation-teacher.component';
import { ResultComponent } from './result/result.component';
import { TeacherListTchComponent } from './teacher-list-tch/teacher-list-tch.component';
import { TeacherListCoordinadorComponent } from './teacher-list-coordinador/teacher-list-coordinador.component'


@NgModule({
  declarations: [
    SelfEvalCoordinadorComponent,
    SelfEvalTeacherComponent,
    EvaluationComponent,
    EvaluationTeacherComponent,
    ResultComponent,
    TeacherListTchComponent,
    TeacherListCoordinadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TeacherEvalRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    InputSwitchModule,
    CheckboxModule,
    ConfirmDialogModule,
    RadioButtonModule,
    ToastModule,
    MessagesModule,
    MessageModule

  ], providers: [ConfirmationService, MessageService]
})
export class TeacherEvalModule { }
