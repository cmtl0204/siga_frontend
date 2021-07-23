import { Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
// services
import { CecyHttpService } from 'src/app/services/cecy/cecy-http.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from 'src/app/services/app/app.service';

// models
import { Planification } from '../../../../models/cecy/Planification';
import { Col } from '../../../../models/setting/col';
import { Paginator } from '../../../../models/setting/paginator';



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
    instructor_id: 1,
    planification_id: null
  };
  @Output() displayOut = new EventEmitter<boolean>();
  



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
      console.log(this.planifications)
    },error=>{
      console.log(error);
    })
  }
  
  openAdd(planificationId: any) {
    console.log(planificationId)
    this.planificationSelected.planification_id = planificationId
    this.showDialog = true
    console.log('se abrió')
    
  }

  close() {
    this.showDialog = false
  }
  save() {
    this.spinnerService.show();
    let data = {
      instructor_id: this.planificationSelected.instructor_id,
      planification_id: this.planificationSelected.planification_id
    }
    console.log(data)

    this.cecyHttpServices.store("planificationInstructors", data).subscribe(
      response=>{
        this.spinnerService.hide();
        console.log(response)
        this.displayOut.emit(false);
        
      }, error => {
        this.spinnerService.hide();
        console.error(error)
       // this.messageService.error(error);
    }
    )
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
