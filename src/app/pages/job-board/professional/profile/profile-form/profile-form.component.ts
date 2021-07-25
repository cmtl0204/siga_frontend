import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Professional } from './../../../../../models/job-board/professional';
import { MessageService } from '../../../../shared/services/message.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { JobBoardHttpService } from '../../../../../services/job-board/job-board-http.service';
import { FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/auth/user';
import { Catalogue } from 'src/app/models/app/catalogue';
import { AppHttpService } from '../../../../../services/app/app-http.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

    @Input() formProfessionalIn: FormGroup;
    @Output() displayOut = new EventEmitter<boolean>();
    identificationTypes: Catalogue[];
    filteredTypes: any[];
    auth: User;
    sexs: Catalogue[];
    genders: Catalogue[];
    formAddress: FormGroup;
    formLocation: FormGroup;
    isTravel: boolean = false;
    isDisability: boolean = false;
    isCatastrophicIllness: boolean = false;
    isFamiliarDisability: boolean = false;
    isFamiliarCatastrophicIllness: boolean = false;
    selectedValues: string[] = [];
    value: boolean;

    constructor(
        public messageService: MessageService,
        private spinnerService: NgxSpinnerService,
        private appHttpService: AppHttpService,
        private jobBoardHttpService: JobBoardHttpService,
        private authServices: AuthService,
    ) {
        this.auth = this.authServices.getAuth();
    }

    ngOnInit() {
        this.getSexs();
        this.getGenders();
        this.getIdentificationTypes();
        this.getProfessional();
    }

    // Fields of Form
    get idField() {
        return this.formProfessionalIn.get('id');
    }

    get identificationField() {
        return this.formProfessionalIn['controls']['user'].get('identification');
    }

    get emailField() {
        return this.formProfessionalIn['controls']['user'].get('email');
    }

    get namesField() {
        return this.formProfessionalIn['controls']['user'].get('names');
    }

    get firstLastnameField() {
        return this.formProfessionalIn['controls']['user'].get('first_lastname');
    }

    get secondLastnameField() {
        return this.formProfessionalIn['controls']['user'].get('second_lastname');
    }

    get phoneField() {
        return this.formProfessionalIn['controls']['user'].get('phone');
    }

    get birthdateField() {
        return this.formProfessionalIn['controls']['user'].get('birthdate');
    }
    get addressField() {
        return this.formProfessionalIn['controls']['user'].get('address');
    }

    get isTravelField() {
        return this.formProfessionalIn.get('is_travel');
    }

    get isDisabilityField() {
        return this.formProfessionalIn.get('is_disability');
    }

    get isCatastrophicIllnessField() {
        return this.formProfessionalIn.get('is_catastrophic_illness');
    }

    get isFamiliarDisabilityField() {
        return this.formProfessionalIn.get('is_familiar_disability');
    }

    get identificationFamiliarDisabilityField() {
        return this.formProfessionalIn.get('identification_familiar_disability');
    }

    get isFamiliarCatastrophicIllnessField() {
        return this.formProfessionalIn.get('is_familiar_catastrophic_illness');
    }

    get aboutMeField() {
        return this.formProfessionalIn.get('about_me');
    }

    get sexTypeField() {
        return this.formProfessionalIn.get('sex_type');
    }

    get genderField() {
        return this.formProfessionalIn.get('gender');
    }

    // Submit Form
    onSubmit(flag = false) {
        if (this.formProfessionalIn.valid) {
            this.updateProfessional(this.formProfessionalIn.value);
        } else {
            this.formProfessionalIn.markAllAsTouched();
        }
    }

    updateProfessional(professional: Professional) {
        this.spinnerService.show();
        this.jobBoardHttpService.update('professional/update', { professional })
            .subscribe(response => {
                this.spinnerService.hide();
                this.messageService.success(response);
                console.log(response);
                this.displayOut.emit(false);
            }, error => {
                this.spinnerService.hide();
                this.messageService.error(error);
            });
    }

    getProfessional() {
        this.spinnerService.show();
        this.jobBoardHttpService.get('professional/show')
            .subscribe(response => {
                this.spinnerService.hide();
                this.formProfessionalIn.patchValue(response['data']);
                console.log(response);
            }, error => {
                this.spinnerService.hide();
                this.messageService.error(error);
            });
    }

    markAllAsTouchedFormProfessional() {
        this.formProfessionalIn.markAllAsTouched();
    }

    // Types of catalogues
    getSexs() {
        this.appHttpService.getCatalogues('PROFESSIONAL_SEX_TYPE').subscribe(response => {
            this.sexs = response['data'];
        }, error => {
            this.messageService.error(error);
        });
    }
    getGenders() {
        this.appHttpService.getCatalogues('PROFESSIONAL_GENDER_TYPE').subscribe(response => {
            this.genders = response['data'];
        }, error => {
            this.messageService.error(error);
        });
    }
    getIdentificationTypes() {
        this.appHttpService.getCatalogues('IDENTIFICATION_TYPE').subscribe(response => {
            this.identificationTypes = response['data'];
        }, error => {
            this.messageService.error(error);
        });
    }

    validateIsDisability() {
        if (this.isDisability == true) {
            this.formProfessionalIn.setValidators(Validators.required);
        } else {
            this.formProfessionalIn.setValidators(null);
        }
    }
    setFormLocation(event) {
        this.formLocation = event;
    }
    public clickIsTravel(e) {
        const isTravel = e.checked;
        if (isTravel) {
            this.isTravel = true;
            this.isTravel = false;
        }
    }
    public clickIsDisability(e) {
        const isDisability = e.checked;
        if (isDisability) {
            this.isDisability = true;
            this.isDisability = false;
        }
    }
    public clickIsCatastrophicIllness(e) {
        const isCatastrophicIllness = e.checked;
        if (isCatastrophicIllness) {
            this.isCatastrophicIllness = true;
            this.isCatastrophicIllness = false;
        }
    }
    public clickIsFamiliarDisability(e) {
        const isFamiliarDisability = e.checked;
        if (isFamiliarDisability) {
            this.isFamiliarDisability = true;
            this.isFamiliarDisability = false;
        }
    }
    public clickIsFamiliarCatastrophicIllness(e) {
        const isFamiliarCatastrophicIllness = e.checked;
        if (isFamiliarCatastrophicIllness) {
            this.isFamiliarCatastrophicIllness = true;
            this.isFamiliarCatastrophicIllness = false;
        }
    }
}
