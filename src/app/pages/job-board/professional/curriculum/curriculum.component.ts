import { SkillComponent } from './../skill/skill.component';
import { Skill } from './../../../../models/job-board/skill';
import { Catalogue } from 'src/app/models/app/catalogue';
import { Component, OnInit, Input, Output, EventEmitter, Host } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paginator } from 'src/app/models/setting/paginator';

@Component({
    selector: 'app-curriculum',
    templateUrl: './curriculum.component.html',
    styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {
    [x: string]: any;
    // @Input() description: string;
    @Input() getPrueba: string;
    @Host() private _app: SkillComponent;

    @Output() skillsOut = new EventEmitter<Skill[]>();
    @Input() skillIn: Skill[];

    constructor() {

    }

    ngOnInit(): void {
        console.log(this.getPrueba);
    }
    remove(id) {

        this.skillsIn = this.skillsIn.filter(element => element.id !== id);
        this.skillsOut.emit(this.skillsIn);
    }

}
