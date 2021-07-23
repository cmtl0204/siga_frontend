import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormGroupName } from '@angular/forms';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/app/teacher';
import { ExtraCredit } from 'src/app/models/teacher-eval/extra-credit';
import { TeacherEvalHttpService } from 'src/app/services/teacher-eval/teacher-eval-http.service';
import { MessageService as MessagePnService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-extracredits',
  templateUrl: './extracredits.component.html',
  styleUrls: ['./extracredits.component.scss']
})
export class ExtracreditsComponent implements OnInit {
  
  teachers: Teacher[];
  teacher: Teacher;
  extraCredits: ExtraCredit[];
  extraCredit : ExtraCredit;
  credits : FormGroup;
  diploma_yavirac: any;
  title_fourth_level: any;
  OCS_member: any;
  governing_processes: any;
  process_nouns: any;
  support_processes: any
  total: 0;

  // credits : FormGroup;

  displayModal: boolean;

  showModalDialog() {
    this.displayModal = true;
  }

  _form = () => {
    this.credits = this.formBuilder.group({
      diploma_yavirac: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(3)]],
      title_fourth_level: ['',[Validators.required, Validators.minLength(0), Validators.maxLength(2)]],
      OCS_member : ['',[Validators.required, Validators.minLength(0), Validators.maxLength(3)]],
      governing_processes : ['',[Validators.required, Validators.minLength(0), Validators.maxLength(5)]] ,
      process_nouns: ['',[Validators.required, Validators.minLength(0), Validators.maxLength(4)]],
      support_processes : ['',[Validators.required, Validators.minLength(0), Validators.maxLength(3)]] 
    })
  
  }

  selectUpdate(id: string) {
    this.router.navigate(['teacher-eval/edit-credit', id]);
    console.log(id);

  }

  constructor(
    private formBuilder: FormBuilder, 
    private teacherEval: TeacherEvalHttpService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService

  ) {
    this.teachers = [];
    this.extraCredits = [];
    this._form();
  }

  ngOnInit(): void {
    this.getTeachers();
    this.getExtraCredits();

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

  getExtraCredits(){
    this.teacherEval.getExtraCredit('credit/credit')
      .subscribe(response => {
        this.extraCredits = response['data'];
        console.log(response)
      },
      
        (error) => console.log('error')
      );
  }

  addCredits(id: string) {

    if(!this.credits.invalid)
    {
      let data = {
        "credit": {
          diploma_yavirac: this.credits.get('diploma_yavirac').value,
          title_fourth_level: this.credits.get('title_fourth_level').value,
          OCS_member: this.credits.get('OCS_member').value,
          governing_processes: this.credits.get('governing_processes').value,
          process_nouns: this.credits.get('process_nouns').value,
          support_processes: this.credits.get('support_processes').value,
          total: this.total
        }
      }

      this.total = ( data.credit.diploma_yavirac + data.credit.title_fourth_level + data.credit.OCS_member + data.credit.governing_processes + data.credit.process_nouns + data.credit.support_processes);
      console.log(this.total)
     
      this.teacherEval.addExtraCredit(id, data)
      .subscribe(response => {
        this.messageService.add({
          severity: 'success',
          summary:'Credito Creado',
          detail: 'Credito Creado con Éxito'
        })
        console.log(data)
     //   alert("Creado Con Exito ")
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

  deleteCredit(id : string){
    this.confirmationService.confirm({
      message: '¿Estas seguro de eliminar ?',
      accept: () => {
        
        this.teacherEval.deleteCredit(id).
        subscribe(response => {
          this.messageService.add({
            severity: 'success',
            summary:'Credito Eliminado',
            detail: 'Credito Eliminad con Éxito'
          }
            
          )
          console.log(response)
          window.location.reload();
          
        }), error => {
          console.log(error);
        }
        
      }
      
      
      
  });

  
  }

}
