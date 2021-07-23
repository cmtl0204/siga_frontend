import { Component, OnInit } from '@angular/core';
// import {CountryService} from '../../../../demo/service/countryservice';
import { SelectItem, MenuItem } from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

import {BreadcrumbService} from '../../../../shared/services/breadcrumb.service';
import {CecyHttpService} from '../../../../services/cecy/cecy-http.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit {
  checkboxValuesCourseFollow: string[] = [];
  levelInstruction: SelectItem[];
  registrationForm: FormGroup;
  knowCourseList = [];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private cecyService: CecyHttpService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.breadcrumbService.setItems([
      { label: 'CEC-Y', routerLink: ['/cecy/dashboard/participants'] },
      { label: 'Cursos Gratuitos' },
    ]);
  }

  buildFormLogin() {
    this.registrationForm = this.fb.group({
      additional_information: this.fb.group({
        company_name: ['', Validators.required],
        company_activity: ['', Validators.required],
        company_address: ['', Validators.required],
        company_phone: ['', Validators.required],
        company_sponsor: [false, Validators.required],
        name_contact: ['', Validators.required],
        know_course: ['', Validators.required],
        course_follow: ['', Validators.required],
        works: [false, Validators.required],
        level_instruction: ['', Validators.required]
      }),
      registration: this.fb.group({
        date_registration: [new Date().toISOString(), Validators.required],
        planification_id: [0, Validators.required],
      }),
      knowCourseList: this.fb.array([])
    });
  }

  async ngOnInit() {

    await this.buildFormLogin();
    this.levelInstruction = [];
    await this.route.params.subscribe(
      (params: any) => {
        this.registrationForm.value.registration.planification_id = parseInt(params.id, 0);
      }
    );
    this.levelInstruction.push({
      label: 'Seleccione su nivel de intrucción',
      value: 0,
    });
    this.levelInstruction.push({
      label: 'Primaria',
      value: { id: 1, name: 'primary' },
    });
    this.levelInstruction.push({
      label: 'Secundaria',
      value: { id: 2, name: 'high-school' },
    });
    this.levelInstruction.push({
      label: 'Superior',
      value: { id: 3, name: 'degree' },
    });
  }

  saveRegistrationData() {
    console.log('To SEND!!!', this.registrationForm.value);
    this.cecyService.store('registrations', this.registrationForm.value).subscribe((response: any) => {
      console.log(response);
    });
  }
}
