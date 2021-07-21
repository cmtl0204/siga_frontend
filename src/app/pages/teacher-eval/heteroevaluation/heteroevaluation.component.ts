import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/app/message.service';
import { TeacherEvalHttpService } from 'src/app/services/teacher-eval/teacher-eval-http.service';
import { HttpParams } from '@angular/common/http';
import { Paginator } from 'src/app/models/setting/paginator';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherEvalService } from 'src/app/services/teacher-eval/teacher-eval.service';
import { Preguntas } from 'src/app/models/teacher-eval/preguntas';
import { Question } from 'src/app/models/teacher-eval/question';
import { Evaluation } from 'src/app/models/teacher-eval/evaluation';
import { Teacher } from 'src/app/models/app/teacher';
import { EvaluationType } from 'src/app/models/teacher-eval/evaluation-type';
import { SchoolPeriod } from 'src/app/models/app/school-period';
import { Status } from 'src/app/models/app/status';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-heteroevaluation',
  templateUrl: './heteroevaluation.component.html',
  styleUrls: ['./heteroevaluation.component.css']
})

export class HeteroevaluationComponent implements OnInit {
  formQuestion: FormGroup;
  paginator: Paginator;
  questions: Question[];
  evaluations: Evaluation;
  docente: Teacher;
  evaluationType: EvaluationType;
  schoolPeriod: SchoolPeriod;
  status: Status;


  selectedValue: string = 'val1';

  constructor(public messageService: MessageService,
    private formBuilder: FormBuilder,
    private teacherEvalService: TeacherEvalService,
    private teacherEvalHttpService: TeacherEvalHttpService,
    private confirmationService: ConfirmationService,

  ) {
    this.paginator = { current_page: 1, per_page: 12 };
    this.questions = [];

  }
  city: string;
  selectedCategory: any = null;
  evaluacion: any[] = [{ name: '1', key: this.getRandom() }, { name: '2', key: this.getRandom() }, { name: '3', key: this.getRandom() }, { name: '4', key: this.getRandom() }];
  pregunta: any[];

  modelo: Preguntas[] = [];


  buildFormQuestion() {
    this.formQuestion = this.formBuilder.group({
      type: [null],
      status: [null],
      code: [null, Validators.required],
      order: [null, Validators.required],
      name: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

  get typeField() {
    return this.formQuestion.get('type');
  }
  get statusField() {
    return this.formQuestion.get('type');
  }
  get cpdeField() {
    return this.formQuestion.get('type');
  }
  get orderField() {
    return this.formQuestion.get('type');
  }
  get nameField() {
    return this.formQuestion.get('type');
  }
  get descriptionField() {
    return this.formQuestion.get('type');
  }


  getQuestions(paginator: Paginator) {
    const params = new HttpParams()
      .append('page', paginator.current_page.toString())
      .append('per_page', paginator.per_page.toString());

    this.teacherEvalHttpService.get('questions').subscribe(
      response => {
        this.questions = response['data'];
        this.paginator = response as Paginator;
        this.messageService.success(response);
      }, error => {
        this.messageService.error(error);
      }
    )
  }


  ngOnInit() {
    this.buildFormQuestion();
    this.onTestWebService();
    this.selectedCategory = this.evaluacion[1];
  }


  //para traer las preguntas
  onTestWebService() {
    this.teacherEvalService.getHeteroevaluation(1).subscribe(result => {
      this.pregunta = result.data;
      this.getInicializarModelo();
    });
  }

  getRandom() {
    return Math.random();
  }

  //para que el radio button sea equivalente a las preguntas que haya
  getInicializarModelo() {
    let i: number = 0;
    while (this.pregunta.length > i) {
      let inicializador: Preguntas = new Preguntas();
      // inicializador.valor=1;
      this.modelo.push(inicializador);
      i++;
    }
  }

  //para que el radiobutton sea dinamico y no se marque todos al mism tiempo se gun la pregunta
  getCheckSelect() {
    let numeroDePreguntas: number = 25;
    let porcentajeEvaluacion: number = 0;
    console.log(this.pregunta.length);

    for (const iterator of this.modelo) {
      porcentajeEvaluacion += +iterator.valor * 100 / numeroDePreguntas;
    }
    console.log("resultado de la regla de 3 =", porcentajeEvaluacion);


    this.docente = {
      id: 1,
      name: "Profe Edu"
    }

    this.evaluationType = {
      id: 6
    }

    this.schoolPeriod = {
      id: 1
    }

    this.status = {
      id: 1
    }

    this.evaluations = {
      id: 1,
      result: porcentajeEvaluacion,
      percentage: 0.35,
    }

    let dataSave = {
      teacher: this.docente,
      evaluation_type: this.evaluationType,
      shoolPeriod: this.schoolPeriod,
      status: this.status,
      evaluation: this.evaluations
    }
    console.log(dataSave);
    this.teacherEvalService.postHeteroevaluation(dataSave).subscribe(result => {
      console.log(result);

    }, error => {
      console.log(error);

    }
    );

  }

  confirm() {
    this.confirmationService.confirm({
        message: '¿Estas seguro de guardar la evaluación?',
        accept: () => {
          

          
        }
    });
}

}








