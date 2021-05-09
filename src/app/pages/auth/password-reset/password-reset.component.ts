import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/auth/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import swal from 'sweetalert2';
import {AuthHttpService} from '../../../services/auth/authHttp.service';


@Component({
    selector: 'app-password-reset',
    templateUrl: './password-reset.component.html',
    styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
    dark: boolean;
    checked: boolean;
    user: User;
    formPasswordReset: FormGroup;

    constructor(
        private authHttpService: AuthHttpService,
        private spinner: NgxSpinnerService,
        private router: Router,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.buildFormPasswordReset();
    }

    buildFormPasswordReset() {
        this.formPasswordReset = this.formBuilder.group({
            token: [this.activatedRoute.snapshot.queryParams.token, Validators.required],
            username: [this.activatedRoute.snapshot.queryParams.username, Validators.required],
            password: ['', [Validators.required, Validators.minLength(8)]],
            password_confirmation: ['', [Validators.required, Validators.minLength(8)]],
        });
    }

    onSubmitResetPassword(event: Event) {
        event.preventDefault();
        if (this.formPasswordReset.valid) {
            this.resetPassword();
        } else {
            this.formPasswordReset.markAllAsTouched();
        }
    }

    resetPassword() {
        if (this.checkPasswords()) {
            this.spinner.show();
            this.authHttpService.resetPassword(this.formPasswordReset.value).subscribe(
                response => {
                    this.spinner.hide();
                    swal.fire({
                        title: response['msg']['summary'],
                        text: response['msg']['detail'],
                        icon: 'info'
                    });
                }, error => {
                    this.spinner.hide();
                    swal.fire({
                        title: error.error.msg.summary,
                        text: error.error.msg.detail,
                        icon: 'error'
                    });
                });
        }
    }

    checkPasswords() {
        return this.passwordField.value === this.passwordConfirmationField.value;
    }

    get usernameField() {
        return this.formPasswordReset.get('username');
    }

    get passwordField() {
        return this.formPasswordReset.get('password');
    }

    get passwordConfirmationField() {
        return this.formPasswordReset.get('password_confirmation');
    }
}
