import { Professional } from './../../../../../models/job-board/professional';
import { Skill } from './../../../../../models/job-board/skill';
import { Course } from './../../../../../models/job-board/course';
import { Experience } from './../../../../../models/job-board/experience';
import { Language } from './../../../../../models/job-board/language';
import { Reference } from './../../../../../models/job-board/reference';
import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../../../../shared/services/message.service';
import { JobBoardHttpService } from '../../../../../services/job-board/job-board-http.service';
import { User } from 'src/app/models/auth/user';
import { Catalogue } from 'src/app/models/app/catalogue';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Col } from '../../../../../models/setting/col';

@Component({
    selector: 'app-curriculum-list',
    templateUrl: './curriculum-list.component.html',
    styleUrls: ['./curriculum-list.component.scss']
})
export class CurriculumListComponent implements OnInit {
    @Input() flagSkeletonListUsers: boolean;
    @Input() flagSkeletonListSkills: boolean;
    @Input() flagSkeletonListCourses: boolean;
    @Input() flagSkeletonListExperiences: boolean;
    @Input() flagSkeletonListLanguages: boolean;
    @Input() flagSkeletonListReferences: boolean;
    colsUser: Col[];
    colsSkill: Col[];
    colsCourse: Col[];
    colsExperience: Col[];
    colsLanguage: Col[];
    colsReference: Col[];
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
        private authServices: AuthService,
        private jobBoardHttpService: JobBoardHttpService) {
        this.auth = this.authServices.getAuth();
        this.professional = { skills: [] };
    }
    ngOnInit(): void {
        this.getCurriculum();
        this.loadColsUser();
        this.loadColsSkill();
        this.loadColsCourse();
        this.loadColsExperience();
        this.loadColsLanguage();
        this.loadColsReference();
    }
    loadColsUser() {
        this.colsUser = [
            { field: 'identification', header: 'Identificación' },
            { field: 'email', header: 'Correo' },
            { field: 'names', header: 'Nombres' },
            { field: 'first_lastname', header: 'Primer Apellido' },
            { field: 'second_lastname', header: 'Segundo Apellido' },
            { field: 'phone', header: 'Teléfono' },
            { field: 'birthdate', header: 'Fecha Nacimiento' },
            { field: 'sex', header: 'Sexo' },
            { field: 'gender', header: 'Género' },
        ];
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
            { field: 'type', header: 'Tipo' },
            { field: 'certification_type', header: 'Tipo de Certificado' },
            { field: 'area', header: 'Área' },
            { field: 'name', header: 'Nombre' },
            { field: 'description', header: 'Descripción' },
            { field: 'start_date', header: 'Fecha Inicio' },
            { field: 'end_date', header: 'Fecha Fin' },
            { field: 'hours', header: 'Horas' },
        ];
    }
    loadColsExperience() {
        this.colsExperience = [
            { field: 'area', header: 'Área' },
            { field: 'employer', header: 'Empleador' },
            { field: 'position', header: 'Cargo' },
            { field: 'start_date', header: 'Fecha de Inicio' },
            { field: 'activities', header: 'Actividades' },
            { field: 'is_working', header: 'Está Trabajando' },
            { field: 'is_disability', header: 'Es Discapacitado' },
        ];
    }
    loadColsLanguage() {
        this.colsLanguage = [
            { field: 'idiom', header: 'Idioma' },
            { field: 'written_level', header: 'Nivel de Escrito' },
            { field: 'spoken_level', header: 'Nivel de Hablado' },
            { field: 'read_level', header: 'Nivel de Lectura' },
        ];
    }
    loadColsReference() {
        this.colsReference = [
            { field: 'institution', header: 'Institución' },
            { field: 'position', header: 'Cargo' },
            { field: 'contact_name', header: 'Nombre de Contacto' },
            { field: 'contact_phone', header: 'Número de Contacto' },
            { field: 'contact_email', header: 'Correo de Contacto' },
        ];
    }

    getCurriculum() {
        this.jobBoardHttpService.get('professional/curriculum')
            .subscribe(response => {
                this.professional = response['data'];
                // console.log(this.professional.skills);
            }, error => {
                this.messageService.error(error);
            });
    }

}


