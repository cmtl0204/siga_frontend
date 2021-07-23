import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { URL_API } from '../../../environments/environment';
import { Teacher } from '../../models/app/teacher';


@Injectable({
  providedIn: 'root'
})

export class TeacherEvalService {


  constructor(protected http: HttpClient) { }
  removeLogin(){
    localStorage.removeItem('teacher');
  }


  urlvs: string = URL_API + "teacher-eval/question/index?evaluation_type_id=6&per_page=4&page=1";
  urlguardar: string = URL_API + "teacher-eval/evaluation/create";

  getInit(param: any): Observable<any> {   
    const params = {
      per_page:'25',
      page:'1'
    }
    return this.http.get(this.urlvs, { params: params })
  }
  

  postEvaluationAdd(param: any): Observable<any> {
   return this.http.post(this.urlguardar, param);   

  }
  getTeacher(): Teacher{
    return localStorage.getItem('teacher') ? JSON.parse(localStorage.getItem('teacher')) : null;
  }
  //pairs evaluatiosn
  urlpairs: string = URL_API + "teacher-eval/question/index?evaluation_type_id=1&per_page=20&page=1";
  urlenviar: string = URL_API + "teacher-eval/evaluation/create";
  getPairEvaluations(param: any): Observable<any> {   
    const params = {
      per_page:'25',
      page:'1'
    }
    return this.http.get(this.urlpairs, { params: params })
  }
  

  postPairEvaluations(id:string ,param: any): Observable<any> {
   return this.http.post(`${this.urlenviar}/${id}`, param);   
  }
}
