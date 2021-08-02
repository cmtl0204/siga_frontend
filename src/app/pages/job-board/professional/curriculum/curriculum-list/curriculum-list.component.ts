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
import { JobBoardHttpService } from '../../../../../services/job-board/job-board-http.service';
import { HttpParams } from '@angular/common/http';
import { File } from "../../../../../models/app/file";
import { User } from 'src/app/models/auth/user';
import { Catalogue } from 'src/app/models/app/catalogue';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppHttpService } from '../../../../../services/app/app-http.service';
import { Col } from 'src/app/models/setting/col';


@Component({
    selector: 'app-curriculum-list',
    templateUrl: './curriculum-list.component.html',
    styleUrls: ['./curriculum-list.component.scss']
})
export class CurriculumListComponent implements OnInit {
    @Input() flagSkeletonLanguages: boolean;
    @Input() languagesIn: Language[];
    @Input() paginatorIn: Paginator;
    @Input() formLanguageIn: FormGroup;
    @Input() displayIn: boolean;
    @Output() languagesOut = new EventEmitter<Language[]>();
    @Output() formLanguageOut = new EventEmitter<FormGroup>();
    @Output() displayOut = new EventEmitter<boolean>();
    @Output() paginatorOut = new EventEmitter<Paginator>();
    selectedLanguages: any[];
    selectedLanguage: Language;
    dialogUploadFiles: boolean;
    dialogViewFiles: boolean;
    files: File[];
    paginatorFiles: Paginator;
    professional: Professional[];
    skill: Skill[];
    course: Course[];
    experience: Experience[];
    language: Language[];
    reference: Reference[];
    auth: User;
    sexs: Catalogue[];
    genders: Catalogue[];
    colsSkill: Col[];


    constructor(private messageService: MessageService,
        private appHttpService: AppHttpService,
        private authServices: AuthService,
        private jobBoardHttpService: JobBoardHttpService) {
        this.auth = this.authServices.getAuth();
    }
    ngOnInit(): void {
        this.getProfessional();
        this.getSkills();
        this.getCourses();
        this.getExperiences();
        this.getLanguages();
        this.getReferences();
    }
    getSexs() {
        this.appHttpService.getCatalogues('SEX_TYPE').subscribe(response => {
            this.sexs = response['data'];
        }, error => {
            this.messageService.error(error);
        });
    }
    getGenders() {
        this.appHttpService.getCatalogues('GENDER_TYPE').subscribe(response => {
            this.genders = response['data'];
        }, error => {
            this.messageService.error(error);
        });
    }
    getProfessional() {
        const params = new HttpParams()
        this.jobBoardHttpService.get('professional/show', params)
            .subscribe(response => {
                this.professional = response['data'];
                //console.log(this.professional);
            }, error => {
                this.messageService.error(error);
            });
    }

    getSkills() {
        const params = new HttpParams()
        this.jobBoardHttpService.get('skills', params).subscribe(
            response => {
                this.skill = response['data'];
            }, error => {
                this.messageService.error(error);
            });
        this.colsSkill = [
            { field: 'type', header: 'Code' },
            { field: 'description', header: 'Name' },
        ]
    }

    getCourses() {
        const params = new HttpParams()
        this.jobBoardHttpService.get('courses').subscribe(
            response => {
                this.course = response['data'];
                //console.log(this.course);
            }, error => {
                this.messageService.error(error);
            });

    }

    getExperiences() {
        const params = new HttpParams()
        this.jobBoardHttpService.get('experiences', params).subscribe(
            response => {
                this.experience = response['data'];
            }, error => {
                this.messageService.error(error);
            });
    }

    getLanguages() {
        const params = new HttpParams()
        this.jobBoardHttpService.get('languages', params).subscribe(
            response => {
                this.language = response['data'];
            }, error => {
                this.messageService.error(error);
            });
    }
    getReferences() {
        const params = new HttpParams()
            .append('professional_id', "1")
        this.jobBoardHttpService.get('references', params).subscribe(
            response => {
                this.reference = response['data'];
            }, error => {
                this.messageService.error(error);
            });
    }
}


