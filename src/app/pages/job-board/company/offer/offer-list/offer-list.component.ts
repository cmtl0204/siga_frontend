import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormGroup,  FormBuilder, Validators} from '@angular/forms';
import {Col} from '../../../../../models/setting/col';
import {Paginator} from '../../../../../models/setting/paginator';
import {MessageService} from '../../../../../pages/shared/services/message.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {JobBoardHttpService} from '../../../../../services/job-board/job-board-http.service';
import { Offer } from 'src/app/models/job-board/offer';
import { Professional } from '../../../../../models/job-board/professional';
import {HttpParams} from '@angular/common/http';

@Component({
    selector: 'app-offer-list',
    templateUrl: './offer-list.component.html',
    styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {
    @Input() flagOffers: boolean;
    @Input() offersIn: Offer[];
    @Input() paginatorIn: Paginator;
    @Input() formOfferIn: FormGroup;
    @Input() displayIn: boolean;
    @Output() offersOut = new EventEmitter<Offer[]>();
    @Output() formOfferOut = new EventEmitter<FormGroup>();
    @Output() displayOut = new EventEmitter<boolean>();
    @Output() paginatorOut = new EventEmitter<Paginator>();
    colsOffer: Col[];
    selectedOffers: any[];
    professionalsDialog: boolean;
    paginator: Paginator;
    professionals: Professional[];
    flagProfessionals: boolean;

    constructor(private messageService: MessageService,
                private spinnerService: NgxSpinnerService,
                private jobBoardHttpService: JobBoardHttpService,
                private formBuilder: FormBuilder,) {
        this.resetPaginatorOffers();
        this.paginator = { current_page: 1, per_page: 10 };
    }

    ngOnInit(): void {
        this.loadColsOffer();
    }

    get activitiesField() {
        return this.formOfferIn.get('activities') as FormArray;
    }
    get requirementsField() {
        return this.formOfferIn.get('requirements') as FormArray;
    }

    loadColsOffer() {
        this.colsOffer = [
            {field: 'position', header: 'Cargo'},
            {field: 'status', header: 'Estado'},
            {field: 'vacancies', header: 'Vacantes'},
            {field: 'start_date', header: 'Fecha Inicio'},
            {field: 'end_date', header: 'Fecha Fin'},
        ];
    }

    searchOffers(event, search) {
        if (event.type === 'click' || event.keyCode === 13 || search.length === 0) {
            const params = search.length > 0 ? new HttpParams().append('search', search) : null;
            this.spinnerService.show();
            this.jobBoardHttpService.get('offers', params).subscribe(response => {
                this.offersIn = response['data'],
                    this.spinnerService.hide();
            }, error => {
                this.spinnerService.hide();
                this.messageService.error(error);
            });
        }
    }

    openNewFormOffer() {
        this.formOfferIn.reset();
        this.formOfferOut.emit(this.formOfferIn);
        this.displayOut.emit(true);
    }

    openEditFormOffer(offer: Offer) {
        this.formOfferIn.patchValue(offer);
            this.activitiesField.clear();
            this.requirementsField.clear();
            for(const activity of offer.activities){
              this.addActivities(activity);
            }
            for(const requirement of offer.requirements){
                this.addRequirements(requirement);
              }
        this.formOfferOut.emit(this.formOfferIn);
        this.displayOut.emit(true);
    }

    addActivities(data = null){
        this.activitiesField.push(this.formBuilder.control(data, Validators.required));
    }
    addRequirements(data = null){
        this.requirementsField.push(this.formBuilder.control(data, Validators.required));
    }

    paginateOffer(event) {
        this.paginatorIn.current_page = event.page + 1;
        this.paginatorOut.emit(this.paginatorIn);
    }

    resetPaginatorOffers() {
        this.paginatorIn = {current_page: 1, per_page: 10};
    }

    deleteOffer(offer: Offer) {
        this.messageService.questionDelete({})
            .then((result) => {
                if (result.isConfirmed) {
                    this.spinnerService.show();
                    this.jobBoardHttpService.delete('offer/delete', {ids: offer.id})
                        .subscribe(response => {
                            this.spinnerService.hide();
                            this.messageService.success(response);
                            this.removeOffer(offer);
                        }, error => {
                            this.spinnerService.hide();
                            this.messageService.error(error);
                        });
                }
            });
    }

    // no se utiliza VERIFICAR DDE NUEVO
    removeOffer(offer: Offer) {
        this.offersIn = this.offersIn.filter(element => element !== offer);
        this.offersOut.emit(this.offersIn);
    }

    deleteOffers() {
        this.messageService.questionDelete({})
            .then((result) => {
                if (result.isConfirmed) {
                    const ids = this.selectedOffers.map(element => element.id);
                    this.spinnerService.show();
                    this.jobBoardHttpService.delete('offer/delete', {ids})
                        .subscribe(response => {
                            this.spinnerService.hide();
                            this.messageService.success(response);
                            this.removeOffers(ids);
                        }, error => {
                            this.spinnerService.hide();
                            this.messageService.error(error);
                        });
                }
            });

    }

    removeOffers(ids) {
        for (const id of ids) {
            this.offersIn = this.offersIn.filter(element => element.id !== id);
        }
        this.offersOut.emit(this.offersIn);
    } 

    showProfessionals(offerId){
        this.professionalsDialog = true;
        this.getProfessionals(this.paginator, offerId);
    }

    getProfessionals(paginator: Paginator, offerId) {
        const params = new HttpParams()
          .append('page', paginator.current_page.toString())
          .append('per_page', paginator.per_page.toString());
        this.flagProfessionals = true;
        this.jobBoardHttpService.get('offer/'+ offerId +'/proffesionals', params).subscribe(
          response => {
            this.flagProfessionals = false;
            this.professionals = response['data'];
            this.paginator = response as Paginator;
          }, error => {
            this.flagProfessionals = false;
            this.messageService.error(error);
          });
      }
}
