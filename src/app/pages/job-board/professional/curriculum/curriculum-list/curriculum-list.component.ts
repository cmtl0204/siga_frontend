import { Professional } from './../../../../../models/job-board/professional';
import { Skill } from './../../../../../models/job-board/skill';
import { Course } from './../../../../../models/job-board/course';
import { Experience } from './../../../../../models/job-board/experience';
import { Language } from './../../../../../models/job-board/language';
import { Reference } from './../../../../../models/job-board/reference';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Paginator } from '../../../../../models/setting/paginator';
import { MessageService } from '../../../../shared/services/message.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { JobBoardHttpService } from '../../../../../services/job-board/job-board-http.service';
import { User } from 'src/app/models/auth/user';
import { Catalogue } from 'src/app/models/app/catalogue';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppHttpService } from '../../../../../services/app/app-http.service';
import { Col } from '../../../../../models/setting/col';

@Component({
    selector: 'app-curriculum-list',
    templateUrl: './curriculum-list.component.html',
    styleUrls: ['./curriculum-list.component.scss']
})
export class CurriculumListComponent implements OnInit {
    @Input() flagSkeletonListSkills: boolean;
    @Input() flagSkeletonListCourses: boolean;
    @Input() flagSkeletonLanguages: boolean;
    @Input() languagesIn: Language[];
    @Input() paginatorIn: Paginator;
    @Input() formLanguageIn: FormGroup;
    @Input() displayIn: boolean;
    @Output() languagesOut = new EventEmitter<Language[]>();
    @Output() formLanguageOut = new EventEmitter<FormGroup>();
    @Output() displayOut = new EventEmitter<boolean>();
    @Output() paginatorOut = new EventEmitter<Paginator>();
    colsSkill: Col[];
    colsCourse: Col[];
    selectedLanguages: any[];
    selectedLanguage: Language;
    dialogUploadFiles: boolean;
    dialogViewFiles: boolean;
    professional: Professional;
    skill: Skill[];
    course: Course[];
    experience: Experience[];
    language: Language[];
    reference: Reference[];
    auth: User;
    sexs: Catalogue[];
    genders: Catalogue[];


    constructor(private messageService: MessageService,
        private spinnerService: NgxSpinnerService,
        private appHttpService: AppHttpService,
        private authServices: AuthService,
        private jobBoardHttpService: JobBoardHttpService) {
        this.auth = this.authServices.getAuth();
    }
    ngOnInit(): void {
        this.getCurriculum();
        this.loadColsSkill();
    }
    loadColsSkill() {
        this.colsSkill = [
            { field: 'type', header: 'Tipo' },
            { field: 'description', header: 'Descripción' },
        ];
    }
    loadColsCourse() {
        this.colsCourse = [
            { field: 'institution', header: 'Institución' },
            { field: 'certification_type', header: 'Tipo de Certificado' },
            { field: 'name', header: 'Nombre' },
            { field: 'hours', header: 'Horas' },
        ];
    }

    getCurriculum() {
        this.jobBoardHttpService.get('professional/curriculum')
            .subscribe(response => {
                this.professional = response['data'];
                console.log(this.professional.skills);
            }, error => {
                this.messageService.error(error);
            });
    }

}


