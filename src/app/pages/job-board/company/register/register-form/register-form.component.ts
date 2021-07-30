import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Company} from '../../../../../models/job-board/company';
import {MessageService} from '../../../../shared/services/message.service'; 
import {NgxSpinnerService} from 'ngx-spinner';
import {JobBoardHttpService} from '../../../../../services/job-board/job-board-http.service';
import {AppHttpService} from '../../../../../services/app/app-http.service';
import {HttpParams} from '@angular/common/http';
import { Catalogue } from 'src/app/models/app/catalogue';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Input() formRegisterIn: FormGroup;
  @Output() displayOut = new EventEmitter<boolean>();
  identificationTypes:Catalogue[];
  personType:Catalogue[];
  activityType:Catalogue[];
  types: Catalogue[];
  filteredTypes: any[];
  filteredactivityType:any[];
  filteredpersonType:any[];
  filteredidentificationTypes: any[];

  formAddress: FormGroup;
  formLocation: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
                public messageService: MessageService,
                private spinnerService: NgxSpinnerService,
                private appHttpService: AppHttpService,
                private jobBoardHttpService: JobBoardHttpService,
                private router:Router,
  ) { }

  ngOnInit() {
    this.getIdentificationTypes(),
    this.getPersonType(),
    this.getActivityTypes(),
    this.getTypes();
  }
   // Fields of Form
   get usernameField() {
    return this.formRegisterIn['controls']['user'].get('username');
}

    get identificationField() {
        return this.formRegisterIn['controls']['user'].get('identification');
    }

    get emailField() {
        return this.formRegisterIn['controls']['user'].get('email');
    }

    get passwordField() {
        return this.formRegisterIn['controls']['user'].get('password');
    }

    get passwordConfirmationField() {
        return this.formRegisterIn['controls']['user'].get('password_confirmation');
    }

    get addressField() {
        return this.formRegisterIn['controls']['user'].get('address');
    }

    get locationField() {
        return this.formRegisterIn['controls']['user'].get('location');
    }

    get statusField() {
        return this.formRegisterIn['controls']['user'].get('status');
    }

    get identificationTypeField() {
        return this.formRegisterIn['controls']['user'].get('identification_type');
    
    }

    get tradeNameField() {
        return this.formRegisterIn.get('trade_name');
    }

    get comercialActivitiesField() {
        return this.formRegisterIn.get('comercial_activities') as FormArray;
    }

    addComercialActivity(){
        this.comercialActivitiesField.push(this.formBuilder.control(null,Validators.required));
    }
    removeComercialActivity(index){
        this.comercialActivitiesField.removeAt(index);
    }

    get webField() {
        return this.formRegisterIn.get('web');
    }

    get typeField() {
        return this.formRegisterIn.get('type');
    }

    get activityTypeField() {

        return this.formRegisterIn.get('activity_type');
    }

    get personTypeField() {
        return this.formRegisterIn.get('person_type');

    }

    get prefixField() {
        return this.formRegisterIn.get('prefix');
    }


  register(company: Company) {
    this.spinnerService.show();
    this.jobBoardHttpService.store('company/register', {company}).subscribe(response => {
        this.spinnerService.hide();
        this.messageService.success(response); 
        this.router.navigate(['/auth/login'])

    }, error => {
        this.spinnerService.hide();
        this.messageService.error(error);
    });
} 

onSubmit() {
    if (this.formRegisterIn.valid) {
         this.register(this.formRegisterIn.value);
        }else {
            this.formRegisterIn.markAllAsTouched();
        }
   
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
                this.activityType = response['data'];
            }, error => {
                this.messageService.error(error);
            });
        }
    markAllAsTouchedFormRegister() {
        this.formRegisterIn.markAllAsTouched();
        this.formLocation.markAllAsTouched();
        this.formAddress.markAllAsTouched();
      }

    setFormLocation(event) {
        this.formLocation = event;
    }
}
