import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { Teacher } from 'src/app/models/app/teacher';
import { ExtraCredit } from 'src/app/models/teacher-eval/extra-credit';
import { Research } from 'src/app/models/teacher-eval/research';
import { TeacherEvalHttpService } from 'src/app/services/teacher-eval/teacher-eval-http.service';
import { ConfirmationService } from 'primeng/api';
import {Message,MessageService} from 'primeng/api';
@Component({
  selector: 'app-investigation',
  templateUrl: './investigation.component.html',
  styleUrls: ['./investigation.component.scss']
})
export class InvestigationComponent implements OnInit {

  teachers: Teacher[];
  teacher: Teacher;
  investigation : FormGroup;
  researchs : Research[];
  research : Research;
  inv_auto_eval : any;
  inv_pares : any;
  inv_coodinador : any;
  total : any;

  displayModal: boolean;

  showModalDialog() {
    this.displayModal = true;
  }


  constructor(
    private formBuilder: FormBuilder, 
    private teacherEval: TeacherEvalHttpService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.teachers = [];
    this.researchs = [];
    this._form();
    
  }

  ngOnInit(): void {
    this.getTeachers();
    this.getResearchs();
  }


  _form = () => {
    this.investigation = this.formBuilder.group({
      inv_auto_eval: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(3)]],
      inv_pares: ['',[Validators.required, Validators.minLength(0), Validators.maxLength(2)]],
      inv_coodinador : ['',[Validators.required, Validators.minLength(0), Validators.maxLength(3)]],
   
    })
  
  }

  getTeachers() {
    this.teacherEval.getTeacher('evaluation/teachers')
      .subscribe(response => {
        this.teachers = response['data'];
        console.log(response)

      },
        () => console.log('error')
      );
  }


  
  selectInvestigation(id: string) {
    this.router.navigate(['teacher-eval/edit-investigation', id]);
    console.log(id);

  }

  getResearchs() {
    this.teacherEval.getResearch('investigacion/research')
      .subscribe(response => {
        this.researchs = response['data'];
        console.log(response)
      },
      
      (error) => console.log('error'));
  }


  addResearchs(id : string){

    if(!this.investigation.invalid)
    {
      let data = {
        "research" : {
          inv_auto_eval : this.investigation.get('inv_auto_eval').value,
          inv_coodinador : this.investigation.get('inv_coodinador').value,
          inv_pares : this.investigation.get('inv_pares').value,
          total :  this.total
        }
      }
      const autoEva = ( data.research.inv_auto_eval * 0.20)
      console.log(autoEva)
      const cordinador = (data.research.inv_coodinador * 0.50)
      console.log(cordinador)
      const pares = (data.research.inv_pares * 0.30)
      console.log(pares)
      this.total = (autoEva + cordinador + pares)
      console.log(this.total)
       
    this.teacherEval.addResearch(id, data)
    .subscribe(response => {
      this.messageService.add({
        severity: 'success',
        summary:'Investigacion Creada',
        detail: 'Investigacion Creada con Exito'
      })
      console.log(data)
     // alert("Creado con Exito")
      window.location.reload();
    }
    ), error => {
      console.log(error);
    }
    }else {
      this.messageService.add({
        severity: 'error',
        summary:'Llene todos los Campos',
        detail: 'Llene todos los Campos'
      })
    }

  

    
  }

  deleteResearch(id : string){
    this.confirmationService.confirm({
      message: '¿Estas seguro de guardar la evaluación?',
      accept: () => {
        this.teacherEval.deleteResearch(id)
        .subscribe(response => {
          this.messageService.add({
            severity: 'success',
            summary:'Investigacion Eliminada',
            detail: 'Investigacion Eliminada con Exito'
          }
            
          )
          console.log(response)
         // alert("Eliminado con Exito")
          window.location.reload();
        }), error => {
          console.log(error);
        }

        
      }
  });
  

  }


}
