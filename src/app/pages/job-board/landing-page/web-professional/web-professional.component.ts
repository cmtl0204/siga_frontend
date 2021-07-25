import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Paginator } from 'src/app/models/setting/paginator';
import { Professional } from 'src/app/models/job-board/professional';
import { User } from 'src/app/models/auth/user';

import { JobBoardHttpService } from 'src/app/services/job-board/job-board-http.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MessageService } from 'src/app/pages/shared/services/message.service';

@Component({
  selector: 'app-web-professional',
  templateUrl: './web-professional.component.html',
  styleUrls: ['./web-professional.component.scss']
})
export class WebProfessionalComponent implements OnInit {

  professionals: Professional[];
  paginator: Paginator;
  body: any;
  flagProfessionals: boolean;
  auth: User;

  constructor(
    private authService: AuthService,
    private jobBoardHttpService: JobBoardHttpService,
    private messageService: MessageService) {
      this.paginator = {current_page: 1, per_page: 8};
      this.body = {ids: null, search: null};
      this.professionals = [];
      this.auth = authService.getAuth();
    }

  ngOnInit(): void {
    if (this.auth) {
      this.getProfessionals('private-professionals', this.paginator, this.body);
    } else {
      this.getProfessionals('public-professionals', this.paginator, this.body);
    }
  }

  getProfessionals(route: string, paginator: Paginator, body: any): void {
    const params = new HttpParams()
      .append('page', paginator.current_page.toString())
      .append('per_page', paginator.per_page.toString());

    this.flagProfessionals = true;
    this.jobBoardHttpService.store(`web-professional/${route}`, body, params).subscribe(
      response => {
        this.flagProfessionals = false;
        this.professionals = response['data'];
        this.paginator = response as Paginator;
      }, error => {
        this.flagProfessionals = false;
        this.messageService.error(error);
      }
    );
  }

  changePaginator(event: Paginator): void {
    this.paginator = event;
    if (this.auth) {
      this.getProfessionals('private-professionals', this.paginator, this.body);
    } else {
      this.getProfessionals('public-professionals', this.paginator, this.body);
    }
  }

  changeBody(event: any): void {
    this.body = event;
    this.paginator = {current_page: 1, per_page: 8};
    if (this.auth) {
      this.getProfessionals('private-professionals', this.paginator, this.body);
    } else {
      this.getProfessionals('public-professionals', this.paginator, this.body);
    }
  }

}
