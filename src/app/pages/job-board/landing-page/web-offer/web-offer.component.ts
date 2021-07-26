import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

// servicios
import {NgxSpinnerService} from 'ngx-spinner';
import {MessageService} from '../../../shared/services/message.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {JobBoardHttpService} from '../../../../services/job-board/job-board-http.service';
import {HttpParams} from '@angular/common/http';
import {MessageService as MessagePnService} from 'primeng/api';

// Modelos
import {Paginator} from '../../../../models/setting/paginator';
import {Offer, Category, SearchParams} from '../../../../models/job-board/models.index';
import {AuthService} from '../../../../services/auth/auth.service';
import Swal from 'sweetalert2';
import {Role} from '../../../../models/auth/role';


@Component({
    selector: 'app-web-offer',
    templateUrl: './web-offer.component.html',
    styleUrls: ['./web-offer.component.scss']
})
export class WebOfferComponent implements OnInit {

    role: Role;
    items: MenuItem[];
    offers: Offer[];
    treeData: any[];
    paginator: Paginator;
    scrollHeight = '100px';
    formCodeFilter: FormGroup;
    formMoreFilters: FormGroup;
    categories: Category[];
    displayCodeFilter: boolean;
    displayMoreFilters: boolean;
    displayModalFilter: boolean;
    selectedCategories: Category[];
    searchParams: SearchParams;
    infoLocationOut: any;
    wideCategories: any[];
    specificCategories: any[];
    filteredWideCategory: any[];
    filteredSpecificCategory: any[];
    displayXButton = false;
    generalSearch: string;

    constructor(private spinnerService: NgxSpinnerService,
                private messageService: MessageService,
                private authService: AuthService,
                private formBuilder: FormBuilder,
                private jobBoardHttpService: JobBoardHttpService,
                private messagePnService: MessagePnService) {
        this.paginator = {
            per_page: 9,
            current_page: 1,
        };
        this.setDefaultParamsSearch();
        this.role = authService.getRole();
    }

    ngOnInit() {
        this.buildForms();
        this.getOffers(this.paginator, this.searchParams);
        this.getCategories();
        this.items = [
            {
                label: 'Filtrar por código', icon: 'pi pi-percentage', command: () => {
                    this.showModalFilter('code');
                }
            },
            {
                label: 'Más filtros', icon: 'pi pi-plus', command: () => {
                    this.showModalFilter('moreFilter');
                }
            }
        ];
    }

    buildForms(): void {
        this.formMoreFilters = this.formBuilder.group({
            ids: [null],
            position: [null],
            wideField: [null],
            specificField: [null],
        });
        this.formCodeFilter = this.formBuilder.group({
            code: [null],
        });
    }

    setDefaultParamsSearch(): void {
        this.searchParams = {
            generalSearch: null,
            searchCode: null,
            searchProvince: null,
            searchCanton: null,
            searchPosition: null,
            searchIDs: null
        };
    }

    pageChange(currentPage): void {
        this.paginator.current_page = currentPage.page + 1;
        this.getOffers(this.paginator, this.searchParams);
    }

    locationOut(event): void {
        this.infoLocationOut = event;
    }

    showModalFilter(typeFilter): void {
        if (typeFilter === 'code') {
            this.displayCodeFilter = true;
            this.displayMoreFilters = false;
        }
        if (typeFilter === 'moreFilter') {
            this.displayMoreFilters = true;
            this.displayCodeFilter = false;
        }
        this.displayModalFilter = true;
    }

    // ----------------------- get data -----------------------
    getOffers(paginator: Paginator, searchParams: SearchParams): void {
        const params = new HttpParams()
            .append('page', String(paginator.current_page))
            .append('per_page', String(paginator.per_page));
        const routeFilter = this.role?.code === ('ADMIN' || 'PROFESSIONAL') ? 'private-offers' : 'public-offers';
        this.spinnerService.show();
        this.jobBoardHttpService.store(`web-offer/${routeFilter}`, searchParams, params).subscribe(
            response => {
                this.spinnerService.hide();
                this.offers = response['data'];
                this.paginator = response as any;
            }, error => {
                this.spinnerService.hide();
                this.messageService.error(error);
                console.log(error);
            });
        console.log(routeFilter);
    }

    getCategories(): void {
        this.spinnerService.show();
        this.jobBoardHttpService.get('web-offer/get-categories').subscribe(
            response => {
                this.spinnerService.hide();
                this.categories = response['data'];
                this.modificationDataCategory(response['data']);
                if (this.scrollHeight === undefined || this.scrollHeight.length === 0) {
                    this.scrollHeight = '10px';
                } else {
                    this.scrollHeight = '60vh';
                }
            }, error => {
                this.spinnerService.hide();
                this.messageService.error(error);
                console.log(error);
            });
    }

    modificationDataCategory(categories): void {
        const treeData = [];

        for (const category of categories) {
            const nodeChildren = [];
            for (const child of category.children) {
                nodeChildren.push({id: child.id, label: child.name});
            }
            treeData.push({id: category.id, label: category.name, children: nodeChildren});
        }
        this.treeData = treeData;
        this.loadWideField();
    }

    // ----------------------- filters -----------------------
    filterForCode(): void {
        const params: SearchParams = this.searchParams;

        params.searchCode = this.formCodeFilter.value.code;
        this.getOffers(this.paginator, params);
        this.displayModalFilter = false;
    }

    filterForMore(): void {
        const params: SearchParams = this.searchParams;
        params.searchPosition = this.formMoreFilters.value.position;
        if (this.infoLocationOut.value.country != null) {
            if (this.infoLocationOut.value.province != null) {
                if (this.infoLocationOut.value.province.id) {
                    params.searchProvince = this.infoLocationOut.value.province.id;
                }
            }

            if (this.infoLocationOut.value.canton != null) {
                if (this.infoLocationOut.value.canton.id) {
                    params.searchCanton = this.infoLocationOut.value.canton.id;
                }
            }
        }

        if (this.formMoreFilters.value.wideField != null) {
            if (this.formMoreFilters.value.wideField.id) {
                const searchIdCategory = [];
                searchIdCategory.push(this.formMoreFilters.value.wideField.id);
                params.searchIdCategory = searchIdCategory;
            }
        }

        if (this.formMoreFilters.value.specificField != null) {
            if (this.formMoreFilters.value.specificField.id) {
                const searchParentCategory = [];
                searchParentCategory.push(this.formMoreFilters.value.specificField.id);
                params.searchParentCategory = searchParentCategory;
            }
        }

        this.getOffers(this.paginator, params);
        this.displayModalFilter = false;
    }

    filterForCategories(): void {
        if (this.selectedCategories === undefined) {
            Swal.fire({
                title: 'Sin categorías.',
                text: 'Seleccione una categoría.',
                icon: 'info'
            });
        } else {
            const idsCategories = [];
            const search: SearchParams = this.searchParams;

            for (const category of this.selectedCategories) {
                idsCategories.push(category.id);
            }
            search.searchIDs = idsCategories;

            this.getOffers(this.paginator, search);
        }
    }

    generalFilter(args): void {
        const params: SearchParams = this.searchParams;
        params.generalSearch = args;
        this.getOffers(this.paginator, params);
    }

    cleanFilters(): void {
        const paginator: Paginator = {
            per_page: 9,
            current_page: 1,
        };
        this.setDefaultParamsSearch();
        this.selectedCategories = undefined;
        this.generalSearch = null;
        this.formCodeFilter.reset();
        this.formMoreFilters.reset();
        this.getOffers(paginator, this.searchParams);
    }

    loadWideField() {
        const wideField: any[] = [];

        for (const wideCategory of this.treeData) {
            wideField.push(wideCategory);
        }

        this.wideCategories = wideField;
    }

    filterWideField(event) {
        const filtered: any[] = [];
        const query = event.query;
        for (const wideCategory of this.wideCategories) {
            if (wideCategory.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(wideCategory);
            }
        }

        this.filteredWideCategory = filtered;
    }

    updateSpecificField(parent) {
        if (!parent) {
            console.log('test');
        }
        let filtered: any[] = [];
        for (const node of this.treeData) {
            if (parent.value.id === node.id) {
                filtered = node.children;
            }
        }
        this.specificCategories = filtered;
    }

    filterSpecificField(event) {
        const filtered: any[] = [];
        const query = event.query;
        if (!(this.specificCategories === undefined)) {
            console.log(this.specificCategories);
            for (const specificCategory of this.specificCategories) {
                if (specificCategory.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                    filtered.push(specificCategory);
                }
            }

            this.filteredSpecificCategory = filtered;
        } else {
            this.messagePnService.add({
                key: 'errorSpecificField',
                severity: 'error',
                summary: 'Seleccione un categoria',
                life: 5000
            });
        }
    }

    clearInputSearch(value) {
        if (value === false) {
            this.generalSearch = null;
            this.cleanFilters();
        }
        this.displayXButton = value;
    }

    get wideField() {
        return this.formMoreFilters.get('wideField');
    }

    get specificField() {
        return this.formMoreFilters.get('specificField');
    }
}
