import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reference } from '../../../../../models/job-board/reference';
import { FormGroup } from '@angular/forms';
import { Col } from '../../../../../models/setting/col';
import { Paginator } from '../../../../../models/setting/paginator';
import { MessageService } from '../../../../shared/services/message.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { JobBoardHttpService } from '../../../../../services/job-board/job-board-http.service';
import { HttpParams } from '@angular/common/http';
@Component({
    selector: 'app-reference-list',
    templateUrl: './reference-list.component.html',
    styleUrls: ['./reference-list.component.scss']
})
export class ReferenceListComponent implements OnInit {
    @Input() flagSkeletonReferences: boolean;
    @Input() referencesIn: Reference[];
    @Input() paginatorIn: Paginator;
    @Input() formReferenceIn: FormGroup;
    @Input() displayIn: boolean;
    @Output() referencesOut = new EventEmitter<Reference[]>();
    @Output() formReferenceOut = new EventEmitter<FormGroup>();
    @Output() displayOut = new EventEmitter<boolean>();
    @Output() paginatorOut = new EventEmitter<Paginator>();
    selectedReferences: any[];
    selectedReference: Reference;
    paginatorFiles: Paginator;
    colsReference: Col[];

    constructor(private messageService: MessageService,
        private spinnerService: NgxSpinnerService,
        private jobBoardHttpService: JobBoardHttpService) {
        this.resetPaginatorReferences();
    }

    resetPaginatorReferences() {
        this.paginatorIn = { current_page: 1, per_page: 5 };
    }

    ngOnInit(): void {
        this.loadColsReference();
    }

    loadColsReference() {
        this.colsReference = [
            { field: 'institution', header: 'Institución' },
            { field: 'position', header: 'Cargo' },
            { field: 'contact_name', header: 'Nombre de Contacto' },
            { field: 'contact_phone', header: 'Número de Contacto' },
            { field: 'contact_email', header: 'Correo de Contacto' },
        ];
    }

    // Search references in backend
    searchReferences(event, search) {
        if (event.type === 'click' || event.keyCode === 13 || search.length === 0) {
            const params = search.length > 0 ? new HttpParams().append('search', search) : null;
            this.spinnerService.show();
            this.jobBoardHttpService.get('references', params).subscribe(response => {
                this.referencesIn = response['data'],
                    this.spinnerService.hide();
            }, error => {
                this.spinnerService.hide();
                this.messageService.error(error);
            });
        }
    }

    openNewFormReference() {
        this.formReferenceIn.reset();
        this.formReferenceOut.emit(this.formReferenceIn);
        this.displayOut.emit(true);
    }

    openEditFormReference(reference: Reference) {
        this.formReferenceIn.patchValue(reference);
        this.formReferenceOut.emit(this.formReferenceIn);
        this.displayOut.emit(true);
    }

    selectReference(reference: Reference) {
        this.selectedReference = reference;
    }

    paginateReference(event) {
        this.paginatorIn.current_page = event.page + 1;
        this.paginatorOut.emit(this.paginatorIn);
    }

    deleteReferences(reference = null) {
        this.messageService.questionDelete({})
            .then((result) => {
                if (result.isConfirmed) {
                    if (reference) {
                        this.selectedReferences = [];
                        this.selectedReferences.push(reference);
                    }
                    const ids = this.selectedReferences.map(element => element.id);
                    this.spinnerService.show();
                    this.jobBoardHttpService.delete('reference/delete', ids)
                        .subscribe(response => {
                            this.spinnerService.hide();
                            this.messageService.success(response);
                            this.removeReferences(ids);
                            this.selectedReferences = [];
                        }, error => {
                            this.spinnerService.hide();
                            this.messageService.error(error);
                        });
                }
            });

    }

    removeReferences(ids) {
        for (const id of ids) {
            this.referencesIn = this.referencesIn.filter(element => element.id !== id);
        }
        this.referencesOut.emit(this.referencesIn);
    }

    upload(event, id) {
        const formData = new FormData();
        for (const file of event) {
            formData.append('files[]', file);
        }
        formData.append('id', id.toString());
        this.spinnerService.show();
        this.jobBoardHttpService.uploadFiles('reference/file', formData).subscribe(response => {
            this.spinnerService.hide();
            this.messageService.success(response);
        }, error => {
            this.spinnerService.hide();
            this.messageService.error(error);
        });
    }
}