import {Component, forwardRef, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {AppHttpService} from '../../../../services/app/app-http.service';
import {Location} from '../../../../models/app/location';
import {MessageService as MessagePnService} from 'primeng/api';
import {MessageService} from '../../services/message.service';
import {SharedService} from '../../services/shared.service';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => LocationComponent),
            multi: true
        }
    ]
})

export class LocationComponent implements OnInit, ControlValueAccessor {
    @Input() option = 1;
    @Input() header = '';
    @Input() isEcuador = true;
    @Output() formLocationOut = new EventEmitter<FormGroup>();
    formLocation: FormGroup;
    countries: Location[];
    provinces: Location[];
    cantons: Location[];
    parishes: Location[];
    value: Location;
    onChange: (value: Location) => void;
    onTouch: () => void;
    isDisabled: boolean;
    filteredCountries: any[];
    filteredProvinces: any[];
    filteredCantons: any[];
    filteredParishes: any[];
    selectedLocation: Location;

    constructor(private formBuilder: FormBuilder,
                private appHttpService: AppHttpService,
                private sharedService: SharedService,
                private messagePnService: MessagePnService,
                public messageService: MessageService) {
        this.countries = [];
        this.provinces = [];
        this.cantons = [];
        this.parishes = [];
    }

    ngOnInit(): void {
        this.buildFormLocation();
        this.getLocations();
    }

    buildFormLocation() {
        this.formLocation = this.formBuilder.group({
            country: [null, Validators.required],
            province: [null, Validators.required],
            canton: [null, Validators.required],
            parish: [null, Validators.required],
        });
        switch (this.option) {
            case 1:
                this.provinceField.setValidators(null);
                this.cantonField.setValidators(null);
                this.parishField.setValidators(null);
                break;
            case 2:
                this.cantonField.setValidators(null);
                this.parishField.setValidators(null);
                break;
            case 3:
                this.parishField.setValidators(null);
                break;
        }
        this.formLocationOut.emit(this.formLocation);
    }

    getLocations() {
        this.appHttpService.getCountries().subscribe(response => {
            this.countries = response['data'];
            if (this.isEcuador) {
                this.countryField.setValue({id: 56});
                this.provinces = this.countries.find(element => element.code === '56')['children'];
                if (this.provinceField.value) {
                    this.loadCantons();
                }
            }
        }, error => {
            this.messageService.error(error);
        });
    }

    loadProvinces() {
        this.cantons = [];
        this.parishes = [];
        this.provinces = this.countries.find(element => element.id === this.countryField.value.id)['children'];
    }

    loadCantons() {
        this.parishes = [];
        this.cantons = this.provinces.find(element => element.id === this.provinceField.value.id)['children'];
    }

    loadParishes() {
        this.parishes = this.cantons.find(element => element.id === this.cantonField.value.id)['children'];
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    writeValue(value: Location): void {
        this.value = value;
        switch (this.option) {
            case 1:
                this.countryField.setValue(value);
                break;
            case 2:
                this.provinceField.setValue(value);
                break;
            case 3:
                this.provinceField.patchValue(value?.parent);
                this.cantonField.setValue(value);
                break;
            case 4:
                this.parishField.setValue(value);
                break;
            default:
                this.countryField.setValue(value);
        }
    }

    updateValue(field): void {
        if (this.formLocation.valid && field.value?.id) {
            this.value = {id: field.value.id};
            this.onChange(this.value);
            this.formLocationOut.emit(this.formLocation);
        }
    }

    get countryField() {
        return this.formLocation.get('country');
    }

    get provinceField() {
        return this.formLocation.get('province');
    }

    get cantonField() {
        return this.formLocation.get('canton');
    }

    get parishField() {
        return this.formLocation.get('parish');
    }
}
