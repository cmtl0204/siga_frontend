import { Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
// services
import { CecyHttpService } from 'src/app/services/cecy/cecy-http.service';
import { NgxSpinnerService } from 'ngx-spinner';

// models
import { Planification } from '../../../../models/cecy/Planification';
import { Col } from '../../../../models/setting/col';



@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  users: any;
  filteredUsers: any[];
  instructor: any;
  planifications: Planification[];
  cols: Col[];
  selectedCourses: any[];
  showDialog : boolean = false;
  planificationSelected = {
    instructor_id: {id:''},
    planification_id: ''
  };
  



  constructor( 
    private cecyHttpServices:CecyHttpService,
    private spinnerService: NgxSpinnerService,
    )
    { 
      this.getPlanification();
      this.getTeacher()
    }

  ngOnInit(): void {
  }

  // llamada de las planificaciones existentes
  getPlanification() {
    this.cecyHttpServices.get("planifications").subscribe(
      response=>{this.planifications=response["data"];
    },error=>{
      console.log(error);
    })
  }
  
  openAdd(planificationId: any) {
    this.planificationSelected.planification_id = planificationId
    this.showDialog = true
    
  }

  close() {
    this.showDialog = false
  }
  save() {
    let data = {
      instructor_id: this.planificationSelected.instructor_id.id,
      planification_id: this.planificationSelected.planification_id
    }
    this.spinnerService.show();

    try {
      this.cecyHttpServices.store('planificationInstructors', data)
      alert('Se Agregó un instructor')
      console.log(data)
    } catch (error) {
      console.error(error)
    } finally {
      this.showDialog = false
      this.spinnerService.hide();

    }
  }
  // llamada del maestro responsable
  getTeacher() {
    this.cecyHttpServices.get("course/responsables").subscribe(
      response=>{this.users=response["data"];
    },error=>{
      console.log(error);
    })
  }
  searchTeacher(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let user of this.users) {
        filtered.push(user);
    }
    this.filteredUsers = filtered;
  }


}
