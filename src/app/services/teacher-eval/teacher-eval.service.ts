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


  urlvs: string = URL_API + "teacher-eval/question/index?evaluation_type_id=1&per_page=33&page=1";
  urlguardar: string = URL_API + "teacher-eval/evaluation/create";
  
  getInit(param: any): Observable<any> {   
    const params = {
      per_page:'33',
      page: '1'
    };
    return this.http.get(this.urlvs, { params: params })     
  }

  postEvaluationAdd(param: any): Observable<any> {
    return this.http.post(this.urlguardar, param);   
   }

  urlhtr: string = URL_API + "teacher-eval/question/index?evaluation_type_id=1&per_page=33&page=1";
  urlheteroevaluation: string = URL_API + "teacher-evaluation/create";

  getHeteroevaluation(param: any): Observable<any> {   
    const params = {
      per_page:'33',
      page: '1'
    }
    return this.http.get(this.urlhtr, { params: params })     
  }

  postHeteroevaluation(param: any): Observable<any> {
    return this.http.post(this.urlheteroevaluation, param);   
   };

   urlcoev: string = URL_API + "teacher-eval/question/index?evaluation_type_id=3&per_page=61&page=1";
   urlcoevaluation: string = URL_API + "teacher-evaluation/create";
 
   getCoevaluation(param: any): Observable<any> {   
    const params = {
      per_page:'61',
      page: '1'
    }
    return this.http.get(this.urlcoev, { params: params })     
  }
 
   postCoeavaluation(param: any): Observable<any> {
     return this.http.post(this.urlcoevaluation, param);   
  
    };
 
    urlcoear: string = URL_API + "teacher-eval/question/index?evaluation_type_id=2&per_page=13&page=1";
    urlcoevaluationarea: string = URL_API + "teacher-evaluation/create";
 
    getEvaluationArea(param: any): Observable<any> {   
      const params = {
        per_page:'13',
        page: '1'
      }
      return this.http.get(this.urlcoear, { params: params })     
    }
   postEvaluationArea(param: any): Observable<any> {
     return this.http.post(this.urlcoevaluationarea, param);   
  
    };

    urleva: string = URL_API + "teacher-eval/question/index?evaluation_type_id=4&per_page=48&page=1";
    urlevaluation: string = URL_API + "teacher-evaluation/create";

    getEvaluation(param: any): Observable<any> {   
      const params = {
        per_page:'48',
        page: '1'
      }
      return this.http.get(this.urleva, { params: params })     
    }
 
   postEvaluation(param: any): Observable<any> {
     return this.http.post(this.urlevaluation, param);   
  
    };
}
