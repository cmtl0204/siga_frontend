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


  urlvs: string = URL_API + "teacher-eval/question/index?evaluation_type_id=4&per_page=48&page=1";
  urlguardar: string = URL_API + "teacher-eval/evaluation/create";
  
  getInit(param: any): Observable<any> {   
    return this.http.get(this.urlvs.concat(param));
  }

  postEvaluationAdd(param: any): Observable<any> {
    return this.http.post(this.urlguardar, param);   
 
   };

  urlhtr: string = URL_API + "teacher-eval/question/index?evaluation_type_id=1&per_page=12&page=1";
  urlheteroevaluation: string = URL_API + "teacher-evaluation/create";

  getHeteroevaluation(param: any): Observable<any> {   
    return this.http.get(this.urlhtr.concat(param));
  };

  postHeteroevaluation(param: any): Observable<any> {
    return this.http.post(this.urlheteroevaluation, param);   
 
   };

   urlcoev: string = URL_API + "teacher-eval/question/index?evaluation_type_id=3&per_page=34&page=1";
   urlcoevaluation: string = URL_API + "teacher-evaluation/create";
 
   getCoevaluation(param: any): Observable<any> {   
     return this.http.get(this.urlcoev.concat(param));
   };
 
   postCoeavaluation(param: any): Observable<any> {
     return this.http.post(this.urlcoevaluation, param);   
  
    };
 
    urlcoear: string = URL_API + "teacher-eval/question/index?evaluation_type_id=2&per_page=1&page=1";
    urlcoevaluationarea: string = URL_API + "teacher-evaluation/create";
 
   getEvaluationArea(param: any): Observable<any> {   
     return this.http.get(this.urlcoear.concat(param));
   };
 
   postEvaluationArea(param: any): Observable<any> {
     return this.http.post(this.urlcoevaluationarea, param);   
  
    };

    urleva: string = URL_API + "teacher-eval/question/index?evaluation_type_id=4&per_page=48&page=1";
    urlevaluation: string = URL_API + "teacher-evaluation/create";
 
   getEvaluation(param: any): Observable<any> {   
     return this.http.get(this.urleva.concat(param));
   };
 
   postEvaluation(param: any): Observable<any> {
     return this.http.post(this.urlevaluation, param);   
  
    };
}
