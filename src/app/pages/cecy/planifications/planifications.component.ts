import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';

import {BreadcrumbService} from '../../../shared/services/breadcrumb.service';
import {CecyHttpService} from '../../../services/cecy/cecy-http.service';
import {DetailPlanification} from '../../../models/cecy/Planification';

@Component({
  selector: 'app-planifications',
  templateUrl: './planifications.component.html',
})
export class PlanificationsComponent implements OnInit {
  coursesList: DetailPlanification[];

  selectedFilter: any;
  coursesTypes: SelectItem[];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private cecyService: CecyHttpService
  ) {
    this.breadcrumbService.setItems([
      { label: 'CEC-Y', routerLink: ['/cecy/dashboard/participants'] },
      { label: 'Cursos Gratuitos' },
    ]);
  }

  ngOnInit() {
    this.obtenerCursosGratuitos();

    this.coursesTypes = [];
    this.coursesTypes.push({ label: 'Filtrar por...', value: 0 });
    this.coursesTypes.push({
      label: 'Inglés',
      value: { id: 1, name: 'English' },
    });
    this.coursesTypes.push({
      label: 'Emprendimiento',
      value: { id: 2, name: 'Entrepeneur' },
    });
    this.coursesTypes.push({
      label: 'Desarrollo de Software',
      value: { id: 3, name: 'Software Development' },
    });
  }

  obtenerCursosGratuitos() {
    this.cecyService
      .get('detailPlanification?free=true')
      .subscribe((response: any) => {
        this.coursesList = response.data;
        console.log(this.coursesList[0]);
      });
  }

  // guardar() {
  //   this.cecyService
  //     .post('courses', {
  //       name: 'test2',
  //     })
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  // }

  // actualizar() {
  //   let id = prompt('Ingrese ID'),
  //     text = prompt('TEXTO');

  //   this.cecyService
  //     .update('courses/' + id, {
  //       name: text,
  //     })
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  // }

  // eliminar() {
  //   let id = prompt('Ingrese ID');

  //   this.cecyService.delete('courses/' + id).subscribe((response) => {
  //     console.log(response);
  //   });
  // }
}
