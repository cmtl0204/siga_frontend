import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BreadcrumbService} from '../../../../shared/services/breadcrumb.service';
import {HttpParams} from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';
import {Offer} from '../../../../models/job-board/offer';
import {Paginator} from '../../../../models/setting/paginator';
import {JobBoardHttpService} from '../../../../services/job-board/job-board-http.service';
import {MessageService} from '../../../shared/services/message.service';

@Component({
    selector: 'app-offer',
    templateUrl: './offer.component.html',
    styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
    paginator: Paginator;
    offers: Offer[];
    formOffer: FormGroup;
    offer: Offer;
    offerDialog: boolean;
    flagOffers: boolean;

    constructor(private spinnerService: NgxSpinnerService,
                private messageService: MessageService,
                private formBuilder: FormBuilder,
                private jobBoardHttpService: JobBoardHttpService,
                private breadcrumbService: BreadcrumbService) {
        // this.breadcrumbService.setItems([
        //     {label: 'Empresa', routerLink: ['/job-board/company']},
        //     {label: 'Oferta'}
        // ]);
        this.paginator = {current_page: 1, per_page: 10};
        this.offers = [];
    }

    ngOnInit(): void {
        this.getOffers(this.paginator);
        this.buildFormSkill();
    }

    buildFormSkill() {
        this.formOffer = this.formBuilder.group({
            id: [null],
            vacancies: [null, [Validators.required, Validators.min(1)]],
            code: [{value: null, disabled: true}],
            aditional_information: [null],
            contact_name: [null, Validators.required],
            contact_email: [null, [Validators.required, Validators.email]],
            contact_phone: [null],
            contact_cellphone: [null],
            remuneration: [null, Validators.required],
            contract_type: [null, Validators.required],
            position: [null, Validators.required],
            sector: [null],
            working_day: [null, Validators.required],
            experience_time: [null],
            training_hours: [null, Validators.required],
            location: [null],
            status: [null, Validators.required],
            range_dates: [null, Validators.required],
            start_date: [null, Validators.required],
            end_date: [{value: null, disabled: true}],
            activities: this.formBuilder.array([this.formBuilder.control(null, Validators.required)]),
            requirements: this.formBuilder.array([this.formBuilder.control(null, Validators.required)]),
        });
    }

    getOffers(paginator: Paginator) {
        const params = new HttpParams()
            .append('page', paginator.current_page.toString())
            .append('per_page', paginator.per_page.toString());
        this.flagOffers = true;
        this.jobBoardHttpService.get('offers', params).subscribe(
            response => {
                this.flagOffers = false;
                this.offers = response['data'];
                this.paginator = response as Paginator;
            }, error => {
                this.flagOffers = false;
                this.messageService.error(error);
            });
    }
}
