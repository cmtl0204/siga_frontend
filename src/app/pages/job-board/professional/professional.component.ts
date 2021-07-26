
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BreadcrumbService } from '../../../shared/services/breadcrumb.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Language } from 'src/app/models/job-board/language';

@Component({
    selector: 'app-professional',
    templateUrl: './professional.component.html',
    styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {
    selectedTab = 0;
    prueba1 = "holaCurriculum";
    languages: Language[];
    languageDialog: boolean;
    flagLanguages: boolean;

    constructor(private breadcrumbService: BreadcrumbService, private fb: FormBuilder) {
        this.breadcrumbService.setItems([
            { label: 'Dashboard', routerLink: ['/dashboard'] },
            { label: 'Profesional' }
        ]);
    }

    form: FormGroup;

    ngOnInit(): void {
        this.form = this.fb.group({
            location: [null]
        });
    }

    handleChange(event) {
        console.log(event);
        this.selectedTab = event.index;
    }
}
