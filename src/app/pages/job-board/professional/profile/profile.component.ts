import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paginator } from 'src/app/models/setting/paginator';
import { Professional } from 'src/app/models/job-board/professional';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    formProfessional: FormGroup;
    professional: Professional;
    professionalDialog: boolean;
    paginator: Paginator;

    constructor(private formBuilder: FormBuilder) {
        this.paginator = { current_page: 1, per_page: 3 };
    }

    ngOnInit(): void {
        this.buildFormProfessional();
    }

    //Formulario Profesional//
    buildFormProfessional() {
        this.formProfessional = this.formBuilder.group({
            user: this.formBuilder.group({
                identification: [null, Validators.required],
                email: [null, [Validators.required, Validators.email]],
                names: [null, Validators.required],
                first_lastname: [null, Validators.required],
                second_lastname: [null],
                phone: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
                birthdate: [null, Validators.required],
                sex: [null, Validators.required],
                gender: [null, Validators.required],
                address: [null],

            }),
            is_travel: [null, Validators.required],
            is_disability: [null],
            is_catastrophic_illness: [null],
            is_familiar_disability: [null],
            identification_familiar_disability: [null],
            is_familiar_catastrophic_illness: [null],
            about_me: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],

        });
        // console.log(this.formProfessional['controls']['user']);
    }
}
