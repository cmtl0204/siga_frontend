// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseRouting } from './course.routing';
// PrimeNG Modules
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { SkeletonModule } from 'primeng/skeleton';
// My Components
import { TooltipModule } from 'primeng/tooltip';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaginatorModule } from 'primeng/paginator';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TabViewModule } from 'primeng/tabview';
import { TreeModule } from 'primeng/tree';
import { AccordionModule } from 'primeng/accordion';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CardModule } from 'primeng/card';
import { SharedModule } from '../../shared/shared.module';
import { RippleModule } from 'primeng/ripple';
import { CourseComponent } from './course.component';
import { AprovalComponent } from './aproval/aproval.component';
import { AprovalFormComponent } from './aproval/aproval-form/aproval-form.component';
import { AprovalListComponent } from './aproval/aproval-list/aproval-list.component';
import { CreateCoursesComponent } from './create-courses/create-courses.component';
import { InstitutionComponent } from '../institution/institution.component';
import { CourseAssignalComponent } from '../course-assignal/course-assignal.component';
import { UpdatecodeComponent } from './updatecode/updatecode.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CourseRouting),
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        PasswordModule,
        ButtonModule,
        DropdownModule,
        TooltipModule,
        AutoCompleteModule,
        ToastModule,
        ToolbarModule,
        FileUploadModule,
        TableModule,
        RatingModule,
        DialogModule,
        InputNumberModule,
        ConfirmDialogModule,
        InputTextareaModule,
        TooltipModule,
        DropdownModule,
        PaginatorModule,
        KeyFilterModule,
        TabViewModule,
        TreeModule,
        AccordionModule,
        OverlayPanelModule,
        SharedModule,
        CardModule,
        SkeletonModule,
        RippleModule,
        MessageModule,
        MessagesModule
    
    ],
    declarations: [
        CourseComponent,
        AprovalComponent,
        AprovalFormComponent,
        AprovalListComponent,
        CreateCoursesComponent,
        InstitutionComponent,
        CourseAssignalComponent,
        UpdatecodeComponent
    ],
    providers: []
})
export class CourseModule { }
