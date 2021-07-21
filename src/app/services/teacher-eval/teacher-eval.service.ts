import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { URL_API } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class TeacherEvalService {


  constructor(protected http: HttpClient) {  }



  // urlvs: string = "http://siga_backend.test/v1/teacher-eval/question/show/";
  //urlvs: string = "http://siga_backend.test/v1/teacher-eval/question/index?evaluation_type_id=4&per_page=3&page=3";


  urlvs: string = URL_API + "teacher-eval/question/index?evaluation_type_id=6&per_page=4&page=1";
  urlguardar: string = URL_API + "teacher-eval/evaluation/create";

  getInit(param: any): Observable<any> {   
    return this.http.get(this.urlvs.concat(param));
  }
  

  postEvaluationAdd(param: any): Observable<any> {
   return this.http.post(this.urlguardar, param);   

  }

}
