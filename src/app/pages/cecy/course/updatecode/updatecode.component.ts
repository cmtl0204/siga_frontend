import { Component, Input, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { CecyHttpService } from "src/app/services/cecy/cecy-http.service";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Course } from '../../../../models/cecy/Course';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { MessageService } from 'src/app/services/app/message.service';

@Component({
  selector: 'app-updatecode',
  templateUrl: './updatecode.component.html',
  styleUrls: ['./updatecode.component.css']
})
export class UpdatecodeComponent implements OnInit {
  @Output() showModal = new EventEmitter<boolean>();
  @Input() updateCourseFormIn: FormGroup;


  constructor(private cecyhttpSerivice: CecyHttpService,
    private spinnerService: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,

    
  ) {
   }

  ngOnInit(): void {
   

  }

  get nameField() {
    return this.updateCourseFormIn.get('name');
  }

  get codeField() {
    return this.updateCourseFormIn.get('code');
  }
  get hourField() {
    return this.updateCourseFormIn.get('hours_duration');
  }
  get tutorField() {
    return this.updateCourseFormIn.get('setec_name');
  }
  updateCode() {
    if (this. updateCourseFormIn.valid) {

    this.spinnerService.show();
    const data = {
      "course":{
        "id":this. updateCourseFormIn.value.id,
        "name":this. updateCourseFormIn.value.name,
        "code": this. updateCourseFormIn.value.code,
        "hours_duration": this. updateCourseFormIn.value.hours_duration,
        "setec_name": this. updateCourseFormIn.value.setec_name,


        }
    }
    this.cecyhttpSerivice.update('course/UpdateCode', data)
     .subscribe(response => {
      this.messageService.success(response)
      console.log(response['msg']);
     this.spinnerService.hide();
     console.log(response);
    }, error => {
     this.spinnerService.hide();
     console.log(error);
     });
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
