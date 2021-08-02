import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Company} from 'src/app/models/job-board/company';
import {MessageService} from '../../../../shared/services/message.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {JobBoardHttpService} from '../../../../../services/job-board/job-board-http.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Catalogue} from '../../../../../models/app/catalogue';
import {AppHttpService} from '../../../../../services/app/app-http.service';
import {User} from 'src/app/models/auth/user';
import {AuthService} from 'src/app/services/auth/auth.service';


@Component({
    selector: 'app-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

    @Input() formCompanyIn: FormGroup;
    @Output() displayOut = new EventEmitter<boolean>();
    identificationTypes: Catalogue[];
    personType: Catalogue[];
    activityTypes: Catalogue[];
    types: Catalogue[];
    filteredTypes: any[];
    filteredActivityTypes: any[];
    filteredpersonTypes: any[];
    filteredidentificationTypes: any[];
    formAddress: FormGroup;
    formLocation: FormGroup;
    auth: User;
    skeletonCompany: boolean;

    constructor(
        private formBuilder: FormBuilder,
        public messageService: MessageService,
        private spinnerService: NgxSpinnerService,
        private appHttpService: AppHttpService,
        private jobBoardHttpService: JobBoardHttpService,
        private authServices: AuthService,
    ) {
        this.auth = this.authServices.getAuth();
    }

    ngOnInit() {
        this.getCompany();
        this.getActivityTypes();
        this.getIdentificationTypes();
        this.getPersonType();
        this.getTypes();
    }

    get identificationField() {
        return this.formCompanyIn['controls']['user'].get('identification');
    }

    get namesField() {
        return this.formCompanyIn['controls']['user'].get('names');
    }

    get firstLastnameField() {
        return this.formCompanyIn['controls']['user'].get('first_lastname');
    }

    get secondLastnameField() {
        return this.formCompanyIn['controls']['user'].get('first_lastname');
    }

    get emailField() {
        return this.formCompanyIn['controls']['user'].get('email');
    }

    get phoneField() {
        return this.formCompanyIn['controls']['user'].get('phone');
    }

    get cellphoneField() {
        return this.formCompanyIn['controls']['user'].get('cellphone');
    }

    get identificationTypeField() {
        return this.formCompanyIn['controls']['user'].get('identification_type');
    }

    get addressField() {
        return this.formCompanyIn['controls']['user'].get('address');
    }

    get tradeNameField() {
        return this.formCompanyIn.get('trade_name');
    }

    get prefixField() {
        return this.formCompanyIn.get('prefix');
    }

    get comercialActivitiesField() {
        return this.formCompanyIn.get('comercial_activities') as FormArray;
    }

    get webField() {
        return this.formCompanyIn.get('web');
    }

    get typeField() {
        return this.formCompanyIn.get('type');
    }

    get activityTypesField() {
        return this.formCompanyIn.get('activity_type');
    }

    get personTypeField() {
        return this.formCompanyIn.get('person_type');
    }

    onSubmit() {
        console.log(this.formCompanyIn);
        if (this.formCompanyIn.valid) {
            this.updateCompany(this.formCompanyIn.value);
        } else {
            this.formCompanyIn.markAllAsTouched();
        }
    }

    updateCompany(company: Company) {
        this.spinnerService.show();
        this.jobBoardHttpService.update('company/update', {company})
            .subscribe(response => {
                this.spinnerService.hide();
                this.messageService.success(response);
                this.displayOut.emit(false);
            }, error => {
                this.spinnerService.hide();
                this.messageService.error(error);
            });
    }

    getCompany() {
        this.skeletonCompany = false;
        this.jobBoardHttpService.get('company/show')
            .subscribe(response => {
                this.skeletonCompany = true;
                this.formCompanyIn.patchValue(response['data']);
                if (response['data']['comercial_activities']?.length > 0) {
                    this.comercialActivitiesField.removeAt(0);
                    for (const comercialActivity of response['data']['comercial_activities']) {
                        this.addComercialActivity(comercialActivity);
                    }
                }
            }, error => {
                this.skeletonCompany = true;
                this.messageService.error(error);
            });
    }

    markAllAsTouchedFormCompany() {
        this.formCompanyIn.markAllAsTouched();
    }

    // Types of catalogues
    getIdentificationTypes() {
        this.appHttpService.getCatalogues('IDENTIFICATION_TYPE').subscribe(response => {
            this.identificationTypes = response['data'];
        }, error => {
            this.messageService.error(error);
        });
    }

    getTypes() {
        this.appHttpService.getCatalogues('COMPANY_TYPE').subscribe(response => {
            this.types = response['data'];
        }, error => {
            this.messageService.error(error);
        });
    }

    getPersonType() {
        this.appHttpService.getCatalogues('COMPANY_PERSON_TYPE').subscribe(response => {
            this.personType = response['data'];
        }, error => {
            this.messageService.error(error);
        });
    }

    getActivityTypes() {
        this.appHttpService.getCatalogues('COMPANY_ACTIVITY_TYPE').subscribe(response => {
            this.activityTypes = response['data'];
        }, error => {
            this.messageService.error(error);
        });
    }

    addComercialActivity(data = null) {
        this.comercialActivitiesField.push(this.formBuilder.control(data, Validators.required));
    }

    removeComercialActivity(index) {
        this.comercialActivitiesField.removeAt(index);
    }

    setFormLocation(event) {
        this.formLocation = event;
    }

    validateIdentificationType() {
        this.identificationField.setValue(null);
        switch (this.identificationTypeField.value?.code) {
            case 'RUC':
                this.identificationField.setValidators([Validators.minLength(13), Validators.maxLength(13)]);
                break;
            case 'CC':
                this.identificationField.setValidators([Validators.minLength(9), Validators.maxLength(10)]);
                break;
            case 'PASSPORT':
                this.identificationField.setValidators([Validators.maxLength(20)]);
                break;
        }
    }
}
