import { Component, OnInit } from '@angular/core';
import { CecyHttpService } from "src/app/services/cecy/cecy-http.service";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Course } from '../../../../models/cecy/Course';
import { MessageService } from 'src/app/services/app/message.service';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

interface Docente {
  nombre: string;
  id: number;
}
@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.css']
})
export class CreateCoursesComponent implements OnInit {
  docentes: Docente[];
  status:Course[];
  career:Course[];
  @Output() showModal = new EventEmitter<boolean>();
  formCreate: FormGroup;

  constructor(private cecyHttpService: CecyHttpService,
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ) {
   // this.docentes = [
     // { nombre: 'ING.DIEGO YANEZ', id: 1 },
     // { nombre: 'ING.PABLO ROBAYO', id: 2 },
     // { nombre: 'ING.MAURICIO TAMAYO', id: 3 },
     // { nombre: 'ING.GORKY ESTRELLA', id: 4 },
      //{ nombre: 'ING.HERNAN MEJIA', id: 5 },
      //{ nombre: 'ING.MARIZA TITUAÑA', id: 6 },

    //];
    this.status = [
      { name: 'DISPONIBLE', id: 1 },
      { name: 'INACTIVO', id: 2 },
      { name: 'CERRADO', id:3 },
      { name: 'ACTIVO', id: 4 },
      { name: 'MAINTENACE', id: 5 },

    ];
    this.career = [
      { name: 'TECNOLGÍA SUPERIOR EN DESAROLLO DE SOFTWARE', id: 1 },
      { name: 'TECNOLOGIA SUPERIOR EN ANALISIS DE SISTEMAS', id: 3},
      { name: 'TECNOLOGIA SUPERIOR EN ELECTRONICA', id:4 },
      { name: 'TECNOLOGIA SUPERIOR EN ELECTRICIDAD', id:5 },

   
    ];
  }

  ngOnInit(): void {
    this.buildForm();
  }
  get nameField() {
    return this.formCreate.get('name');
  }

  get codeField() {
    return this.formCreate.get('code');
  }
  get hourField() {
    return this.formCreate.get('hours_duration');
  }
  get careerField() {
    return this.formCreate.get('career');
  }

  buildForm() {
    this.formCreate = this.formBuilder.group({
      name: ['', [Validators.required]
      ],
      hours_duration: ['', [Validators.required]
      ],
      //tutor: ['', [Validators.required]
      //],
      code: ['', [Validators.required]
    ],
    status: ['', [Validators.required]
  ],
  career: ['', [Validators.required]
],
setec_name: ['', [Validators.required]
],
    });

  }

  crearCursos() {
    if (this.formCreate.valid) {
      let course: Course = {
        name: this.formCreate.value.name,
        hours_duration: this.formCreate.value.hours_duration,
        code:this.formCreate.value.code,
        status:this.formCreate.value.status,
        area: { id: 1 },
        level: { id: 1 },
        canton_dictate: { id: 1 },
        setec_name: this.formCreate.value.setec_name,
        abbreviation: "Ac",
        capacitation_type: { id: 1 },
        course_type: { id: 1 },
        entity_certification_type: { id: 1 },
        person_proposal:{ id: 1 },
        classroom: { id: 1 },
        specialty: { id: 1 },
        academic_period: { id: 1 },
        institution: { id: 1 },
        certified_type: { id: 1 },
        career:this.formCreate.value. career,
      }
      this.cecyHttpService.store('course/store', { course }).subscribe(
        response => {
          this.messageService.success(response)
          console.log(response['msg']);
        }, error => {
          console.log(error)
        }
      );
      this.showModal.emit(false);
    } else {
      this.showModal.emit(false);

      Swal.fire({
        title: 'Formulario Invalido.',
        text: 'llene todos los campos.',
        icon: 'error'
      });
    }

  }

  closeModal() {
    this.showModal.emit(false);
  }
}


