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
import { HeteroevaluationComponent } from './heteroevaluation/heteroevaluation.component';
import { CoevaluationCoordinatorAreaComponent } from './coevaluation-coordinator-area/coevaluation-coordinator-area.component';
import { CoevaluationCoordinatorComponent } from './coevaluation-coordinator/coevaluation-coordinator.component';
import { EvaluationTeacherComponent } from './evaluation-teacher/evaluation-teacher.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { ResultComponent } from './result/result.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {Message,MessageService} from 'primeng/api';
import { TeacherListHeteroevaluationComponent } from './teacher-list-heteroevaluation/teacher-list-heteroevaluation.component';
import { TeacherListCoordinatorComponent } from './teacher-list-coordinator/teacher-list-coordinator.component';
import { TeacherListEvaluationComponent } from './teacher-list-evaluation/teacher-list-evaluation.component';
import { TeacherListCoevaluationComponent } from './teacher-list-coevaluation/teacher-list-coevaluation.component';


@NgModule({
  declarations: [
  
    HeteroevaluationComponent,
    CoevaluationCoordinatorAreaComponent,
    CoevaluationCoordinatorComponent,
    EvaluationTeacherComponent,
    EvaluationComponent,
    ResultComponent,
    TeacherListHeteroevaluationComponent,
    TeacherListCoordinatorComponent,
    TeacherListEvaluationComponent,
    TeacherListCoevaluationComponent,
    
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

  ],

  providers: [ ConfirmationService, MessageService]
})
export class TeacherEvalModule { }
// hola