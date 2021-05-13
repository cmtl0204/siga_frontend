import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../../../services/app/message.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JobBoardHttpService} from '../../../../services/job-board/job-board-http.service';
import {Skill} from '../../../../models/job-board/skill';
import {Paginator} from '../../../../models/setting/paginator';
import {HttpParams} from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';
import {BreadcrumbService} from '../../../../shared/services/breadcrumb.service';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
    paginator: Paginator;
    skills: Skill[];
    skill: Skill;
    skillDialog: boolean;
    formSkill: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private messageService: MessageService,
        private spinnerService: NgxSpinnerService,
        private jobBoardHttpService: JobBoardHttpService,
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadcrumbService.setItems([
            {label: 'Dashboard', routerLink: ['/dashboard']},
            {label: 'Profesional'}
        ]);
        this.paginator = {current_page: '1', per_page: '2'};
        this.skills = [];
    }

    ngOnInit(): void {
        this.getSkills(this.paginator);
        this.buildFormSkill();
    }

    // Build form skill
    buildFormSkill() {
        this.formSkill = this.formBuilder.group({
            id: [null],
            type: [null, Validators.required],
            description: [null, Validators.required],
        });
    }

    // skills of backend
    getSkills(paginator: Paginator) {
        const params = new HttpParams().append('page', paginator.current_page)
            .append('per_page', paginator.per_page);
        this.spinnerService.show();
        this.jobBoardHttpService.get('skills', params).subscribe(response => {
            this.spinnerService.hide();
            this.skills = response['data'];
            this.paginator = response as Paginator;
        }, error => {
            this.spinnerService.hide();
            this.messageService.error(error);
        });
    }
}
