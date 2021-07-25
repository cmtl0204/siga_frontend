import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

// services
import {NgxSpinnerService} from 'ngx-spinner';
import {MessageService as MessagePnService} from 'primeng/api';
import {MessageService} from '../../../../shared/services/message.service';
import {JobBoardHttpService} from '../../../../../services/job-board/job-board-http.service';
import {AuthService} from '../../../../../services/auth/auth.service';

// models
import {Offer} from '../../../../../models/job-board/offer';
import {HttpParams} from '@angular/common/http';
import {Paginator} from '../../../../../models/setting/paginator';
import {Role} from '../../../../../models/auth/role';

@Component({
    selector: 'app-offer-data-view',
    templateUrl: './offer-data-view.component.html',
    styleUrls: ['./offer-data-view.component.scss']
})
export class OfferDataViewComponent implements OnInit {

    @Input() offers: Offer[];
    @Output() argsFilters = new EventEmitter<string>();
    role: Role;
    paginator: Paginator;
    moreInformation: Offer;
    displayButtonApply: boolean;
    displayModalMoreInformation: boolean;
    appliedOffer: any[];

    constructor(private spinnerService: NgxSpinnerService,
                private messageService: MessageService,
                private authService: AuthService,
                private jobBoardHttpService: JobBoardHttpService,
                private messagePnService: MessagePnService) {
        this.role = authService.getRole();
        this.role?.code === ('ADMIN' || 'PROFESSIONAL') ? this.displayButtonApply = true : this.displayButtonApply = false;
    }

    ngOnInit(): void {
    }

    applyOffer(idOffer: string, typeAlert: string) {
        const params = new HttpParams()
            .append('id', String(idOffer));
        this.spinnerService.show();
        this.jobBoardHttpService.get('web-offer/apply-offer', params).subscribe(
            response => {
                this.spinnerService.hide();
                this.removeOffer(idOffer);
                if (typeAlert === 'toast') {
                    this.messagePnService.add({
                        key: 'ap',
                        severity: 'success',
                        summary: 'Oferta aplicada.',
                        life: 5000
                    });
                    setTimeout(() => {
                        this.displayModalMoreInformation = false;
                        this.messagePnService.clear();
                    }, 1000);
                }
                if (typeAlert === 'sweet') {
                    this.messageService.success(response);
                }
            }, error => {
                this.spinnerService.hide();
                this.messageService.error(error);
            });
    }

    showModalMoreInformation(offer) {
        this.displayModalMoreInformation = true;
        this.moreInformation = offer;
    }

    closeModalMoreInformation() {
        this.displayModalMoreInformation = false;
        this.moreInformation = null;
    }

    removeOffer(idOffer) {
        const offer = Number(idOffer);
        this.offers = this.offers.filter(each => each.id !== offer);
    }

    sendArgs(args) {
        if (!(args === '')) {
            this.argsFilters.emit(args);
        }
    }
}
