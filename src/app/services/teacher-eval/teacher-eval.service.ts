import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Teacher } from '../../models/app/teacher';
import { Evaluation } from 'src/app/models/teacher-eval/evaluation';
import { Observable } from 'rxjs';
import { URL_API } from '../../../environments/environment';




@Injectable({
  providedIn: 'root'
})

export class TeacherEvalService {
  urlAvatar: string;
  private headers  : HttpHeaders;
  constructor(private httpClient: HttpClient, private router: Router) { 
    this.urlAvatar = environment.STORAGE_URL;

  }
  removeLogin(){
    localStorage.removeItem('teacher');
    localStorage.removeItem('evaluation');
    localStorage.removeItem('typeEvaluation');

  }

  setUrlAvatar(url: string) {
    this.urlAvatar = environment.STORAGE_URL + url;
  }
  
  getTeacher(): Teacher{
    return localStorage.getItem('teacher') ? JSON.parse(localStorage.getItem('teacher')) : null;
  }
  getEvaluation() : Evaluation{
    return localStorage.getItem('evaluation') ? JSON.parse(localStorage.getItem('evaluation')) : null;
  }


  setTeacher(teachers) {
    localStorage.setItem('teacher', JSON.stringify(teachers));
  }

  setEvaluation(evaluations) {
    localStorage.setItem('evaluation', JSON.stringify(evaluations));
  }



  //heteroevaluation
urlhet: string = URL_API + "teacher-eval/question/index?evaluation_type_id=1&per_page=18&page=1";
urlheteroevaluation: string = URL_API + "teacher-eval/evaluation/create";
getHeteroevaluation(param: any): Observable<any> {   
  const params = {
    per_page:'18',
    page:'1'
  }
  return this.httpClient.get(this.urlhet, { params: params })
}

postHeteroevaluation(id:string ,param: any): Observable<any> {
 return this.httpClient.post(`${this.urlheteroevaluation}/${id}`, param);   
}

 //coevaluation-coordinator-area
 urlcoevar: string = URL_API + "teacher-eval/question/index?evaluation_type_id=2&per_page=29&page=1";
 urlcoevaluation: string = URL_API + "teacher-eval/evaluation/create";
 getCoevaluationArea(param: any): Observable<any> {   
   const params = {
     per_page:'29',
     page:'1'
   }
   return this.httpClient.get(this.urlcoevar, { params: params })
 }
 
 postCoevaluationArea(id:string ,param: any): Observable<any> {
  return this.httpClient.post(`${this.urlcoevaluation}/${id}`, param);   
 }

//coevaluation-coordinator
urlcoecor: string = URL_API + "teacher-eval/question/index?evaluation_type_id=3&per_page=47&page=1";
urlcoordinator: string = URL_API + "teacher-eval/evaluation/create";
getCoevaluationCoordinator(param: any): Observable<any> {   
  const params = {
    per_page:'47',
    page:'1'
  }
  return this.httpClient.get(this.urlcoecor, { params: params })
}

postCoevaluationCoordinator(id:string ,param: any): Observable<any> {
 return this.httpClient.post(`${this.urlcoordinator}/${id}`, param);   
}

//evaluation-teacher
urltch: string = URL_API + "teacher-eval/question/index?evaluation_type_id=4&per_page=65&page=1";
urlteacher: string = URL_API + "teacher-eval/evaluation/create";
getEvaluationTeacher(param: any): Observable<any> {   
  const params = {
    per_page:'65',
    page:'1'
  }
  return this.httpClient.get(this.urltch, { params: params })
}

postEvaluationTeacher(id:string ,param: any): Observable<any> {
 return this.httpClient.post(`${this.urlteacher}/${id}`, param);   
}

}


