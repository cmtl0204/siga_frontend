import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Company} from 'src/app/models/job-board/company';
import {Paginator} from 'src/app/models/setting/paginator';
import {CustomValidators} from '../../../shared/validators/custom-validators';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    formCompany: FormGroup;
    company: Company;
    companyDialog: boolean;
    paginator: Paginator;

    constructor(private formBuilder: FormBuilder) {
        this.paginator = {current_page: 1, per_page: 3};
    }

    ngOnInit(): void {
        this.buildFormCompany();
    }

    buildFormCompany() {
        this.formCompany = this.formBuilder.group({
            user: this.formBuilder.group({
                identification: [null, [Validators.required]],
                names: [null, [Validators.required]],
                first_lastname: [null, [Validators.required]],
                second_lastname: [null, [Validators.required]],
                email: [null, [Validators.required, Validators.email, Validators.maxLength(320)]],
                phone: [null, [Validators.required]],
                cellphone: [null, [Validators.required]],
                address: [null],
                identification_type: [null, Validators.required],
            }),
            trade_name: [null, Validators.required],
            prefix: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(5)]],
            comercial_activities: this.formBuilder.array([this.formBuilder.control(null, Validators.required)]),
            web: [null, [Validators.required, Validators.maxLength(100), CustomValidators.isWeb]],
            type: [null, Validators.required],
            activity_type: [null, Validators.required],
            person_type: [null, Validators.required],
        });
    }

}
