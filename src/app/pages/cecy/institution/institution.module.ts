import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InstitutionRoutes} from './institution.routing';

// PrimeNG Modules
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {InputTextModule} from 'primeng/inputtext';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';

// My Components
import {InstitutionComponent} from './institution.component';
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(InstitutionRoutes),
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        ButtonModule,
        MessagesModule,
        MessageModule,
        TooltipModule,
        DialogModule,
    ],
    declarations: [InstitutionComponent],
    providers: [MessageService]
})
export class InstitutionModule {
}