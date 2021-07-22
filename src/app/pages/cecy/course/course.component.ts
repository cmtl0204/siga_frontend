import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/cecy/Course';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  display: boolean = false;

  
  showDialog(value) {
      this.display = value;
  }
  constructor() {

    
   }

  ngOnInit() {
  }

}
