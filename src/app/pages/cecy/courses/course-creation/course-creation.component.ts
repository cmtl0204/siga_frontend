import { Component, EventEmitter,OnInit, Output } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//services
import { CecyHttpService } from 'src/app/services/cecy/cecy-http.service';
import { AppService } from 'src/app/services/app/app.service';
import { HttpParams } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';


//models
import { Catalogue } from 'src/app/models/app/catalogue';



@Component({
  selector: 'app-course-creation',
  templateUrl: './course-creation.component.html',
  styleUrls: ['./course-creation.component.css']
})
export class CourseCreationComponent implements OnInit {
  courses: any;
  filteredCourses: any[];
  needs: [];
  cols: any[];
  need: any;
  Options: any[];
  showDialog : boolean = false;
  // formNeeds: FormGroup;
  courseSelected: any;
  courseSelectedData = {
    id: null,
    code: null,
    needs: [],
    free: null,
    cost:null,
    course_type_id: null,
    modality_id: null,
    hours_duration: null,
    capacity: null,
    place: null,
    Target_group: [],
    summary: null
  };
  types: Catalogue[]
  filteredType: any[];
  modalities: Catalogue[]
  filteredModality: any[];
  @Output() displayOut = new EventEmitter<boolean>();

  constructor(
    private cecyHttpServices:CecyHttpService,
    private AppHttpService: AppService,
    private spinnerService: NgxSpinnerService,
  ) 
  { 
    this.Options = [{label: 'Si', value: true }, {label: 'No', value: false}];
  }

  ngOnInit(): void {
    this.cols = [
      {field: "needs", header: "Necesidades"},
    ];
    this.getCourse()
    this.getType()
    this.getModality()
  }

  openNeeds() {
    this.showDialog = true
    console.log('se abrió')
  }
  close() {
    this.showDialog = false
  }

  getCourse() {
    this.cecyHttpServices.get("course/all").subscribe(
      response=>{this.courses=response["data"];
      console.log(this.courses)
    },error=>{
      console.log(error);
    })
  }

  searchCourse(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (const cours of this.courses) {
      filtered.push(cours);
    }
    this.filteredCourses = filtered;
  }

  // llamada del type
  getType() {
    const params = new HttpParams().append('type','COURSE_TYPE');
    this.AppHttpService.getCatalogues(params).subscribe(response => {
      this.types = response['data'];
      console.log(this.types)
    }, error => {
      console.log(error);
    });
  }

  searchType(event) {
    const filtered: any[] = [];
    const query = event.query;
    for (const type of this.types) {
      filtered.push(type);
    }
    this.filteredType = filtered;
  }
  // llamada del modality
  getModality() {
    const params = new HttpParams().append('type','CAREER_MODALITY');
    this.AppHttpService.getCatalogues(params).subscribe(response => {
      this.modalities = response['data'];
      console.log(this.modalities)
    }, error => {
      console.log(error);
    });
  }

  searchModality(event) {
    const filtered: any[] = [];
    const query = event.query;
    for (const modality of this.modalities) {
      filtered.push(modality);
    }
    this.filteredModality = filtered;
  }

  getById() {
    // this.courseSelectedData.needs.forEach(need => {
    //   let needs = JSON.parse(need.needs)
    //   console.log(needs)
    // });
    this.courses.forEach(async course => {
      if (course.id == this.courseSelected.id) {
        this.courseSelectedData.id = course.id
        this.courseSelectedData.code = course.code
        this.courseSelectedData.needs = JSON.parse(course.needs)
        this.courseSelectedData.free = await course.free
        if(this.courseSelectedData.free) {
          this.courseSelectedData.cost = 0
        } else {
          this.courseSelectedData.cost = course.cost
        }
        this.courseSelectedData.course_type_id = course.course_type_id
        this.courseSelectedData.modality_id = course.modality_id
        this.courseSelectedData.hours_duration = course.hours_duration
        this.courseSelectedData.capacity = course.capacity
        this.courseSelectedData.place = course.place
        this.courseSelectedData.Target_group = JSON.parse(course.Target_group)
        this.courseSelectedData.summary = course.summary

      }
    });
  }

  // buildFormNeeds() {
  //   this.formNeeds = this.formBuilder.group({
  //     needs: [null, Validators.required],
  //   });
  //   console.log(this.formNeeds)
  
  //   this.formNeeds.valueChanges.subscribe(
  //     reponse=>{console.log(reponse)}
  //   )
  // }

  async addNeeds() {
    try {
      await this.courseSelectedData.needs.push(this.need)
      console.log('Agregado')
      console.log(this.courseSelectedData)
    } catch (error) {
      console.log(error)
    } finally {
      
      this.showDialog = false
    }
  }
  
  updateCourse() {
    this.spinnerService.show();
    let coursSend = {
      needs: JSON.stringify(this.courseSelectedData.needs),
      id: this.courseSelectedData.id,
      code: this.courseSelectedData.code,
      free: this.courseSelectedData.free,
      cost:this.courseSelectedData.cost,
      course_type_id:this.courseSelectedData.course_type_id,
      modality_id: this.courseSelectedData.modality_id,
      hours_duration: this.courseSelectedData.hours_duration,
      capacity: this.courseSelectedData.capacity,
      place: this.courseSelectedData.place,
      Target_group: this.courseSelectedData.Target_group,
      summary: this.courseSelectedData.summary
    }

    this.cecyHttpServices.update('course/approval/' + this.courseSelectedData.id,  {coursSend} )
        .subscribe(response => {
            this.spinnerService.hide();
          //  this.messageService.success(response);
            // this.courses(response['data']);
            console.log(response)
            this.displayOut.emit(false);
        }, error => {
            this.spinnerService.hide();
            console.error(error)
           // this.messageService.error(error);
        });
}

}
