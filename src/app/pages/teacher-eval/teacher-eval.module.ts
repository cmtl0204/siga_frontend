import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TeacherEvalRoutingModule } from './teacher-eval-routing.module';
import { ManagementComponent } from './management/management.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CheckboxModule} from 'primeng/checkbox';
import { GeneratePDFComponent } from './generate-pdf/generate-pdf.component';
import { ExtracreditsComponent } from './extracredits/extracredits.component';
import {CardModule} from 'primeng/card';
import {ScrollTopModule} from 'primeng/scrolltop';
import { InvestigationComponent } from './investigation/investigation.component';
import { EditCreditComponent } from './edit-credit/edit-credit.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { EditInvestigationComponent } from './edit-investigation/edit-investigation.component';


@NgModule({
  declarations: [
    ManagementComponent,
    GeneratePDFComponent,
    ExtracreditsComponent,
    InvestigationComponent,
    EditCreditComponent,
    EditInvestigationComponent,
  
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
    CardModule,
    ScrollTopModule, 
    ReactiveFormsModule,
    ConfirmDialogModule
    
  ],
  providers: [ ConfirmationService]
})
export class TeacherEvalModule { }
// hola