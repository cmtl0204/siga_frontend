import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

import { Professional } from 'src/app/models/job-board/professional';
import { Role } from 'src/app/models/auth/role';
import { Paginator } from 'src/app/models/setting/paginator';

import { JobBoardHttpService } from 'src/app/services/job-board/job-board-http.service';
import { MessageService } from 'src/app/pages/shared/services/message.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.component.html',
  styleUrls: ['./professional-list.component.scss']
})
export class ProfessionalListComponent implements OnInit {

  @Input() professionalsIn: Professional[];
  @Input() paginatorIn: Paginator;
  @Input() flagProfessionals: boolean;

  @Output() paginatorOut = new EventEmitter<Paginator>();
  @Output() bodyOut = new EventEmitter<any>();

  role: Role;

  constructor(
    private jobBoardHttpService: JobBoardHttpService,
    private spinnerService: NgxSpinnerService,
    private messageService: MessageService,
    private authService: AuthService) {
      this.role = authService.getRole();
    }

  ngOnInit(): void { }

  pageChange(event): void {
    this.paginatorIn.current_page = event.page + 1;
    this.paginatorOut.emit(this.paginatorIn);
  }

  applyProfessional(professional: Professional): void {
    if (this.role?.code === 'COMPANY') {
      this.spinnerService.show();
      this.jobBoardHttpService.applyProfessional(professional.id).subscribe(
        response => {
          this.spinnerService.hide();
          this.professionalsIn = this.professionalsIn.filter(value => value!=professional);
          this.messageService.success(response);
        },
        error => {
          this.spinnerService.hide();
          this.messageService.error(error);
        }
      );
    } else {
      Swal.fire({
        text: 'Para contactar con los profesionales tiene que iniciar sesión como EMPRESA',
        icon: 'error'
      });
    }
  }

  showCurriculum(professional: Professional){
    if (this.role?.code === 'COMPANY') {
      Swal.fire({
        text: 'Lo sentimos, aún estamos trabajando en esta funcionalidad',
        icon: 'warning'
      });
    }
    else {
      Swal.fire({
        text: 'Para visualizar la hoja de vida del profesional tiene que iniciar sesión como EMPRESA',
        icon: 'error'
      });
    }
  }
}
