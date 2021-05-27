import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, Directive,
  EventEmitter,
  inject,
  Injector,
  Input, OnDestroy,
  OnInit,
  Output, ViewChild
} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { AbstractControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Vehicle, VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { Observable, Subscription } from 'rxjs';
import { CreateVehicleService, loadForms, loadSteps } from '../../services';
import { MasterCreateCommand } from '@zyweb/shared/util/utility';
import { concatAll, debounceTime, distinct, distinctUntilChanged, filter, first, map, switchMap } from 'rxjs/operators';
import { BaseFormControl } from '@zyweb/shared/ui/base';
import { VehicleCreateFormDataProvider } from '../../containers/create/providers';
import { AutoComplete } from 'primeng/autocomplete';
import { VehicleFacade } from '@zyweb/vehicle/vehicle/data-access/store';


@Component({
  selector: 'zyweb-vehicle-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})


export class CreateFormComponent implements OnInit, AfterViewInit {
  @ViewChild('nameAutoComplete') nameAutoComplete: AutoComplete;

  private subscriptions: Array<Subscription> = [];
  vehicleName$: Observable<Vehicle[]>;

  filteredCountries: any[];
  public countries = [
    { label: 'Kyoto', name: 'Kyoto' },
    { label: 'Osaka', name: 'Osaka' }

  ];

  public items = [
    { label: 'Kyoto', name: 'Kyoto' },
    { label: 'Osaka', name: 'Osaka' },
    { label: 'Tokyo', name: 'Tokyo' },
    { label: 'Yokohama', name: 'Yokohama' }
  ];

  selectedCountry: any;

  @Input()
  form: FormGroup;

  constructor(public formDataProvider: VehicleCreateFormDataProvider,
) {
  }

  ngAfterViewInit() {
    // this.vehicleName$ = this.formDataProvider.vehicleName$;
    this.vehicleName$ = this.nameAutoComplete.completeMethod
      .pipe(
        debounceTime(100),
        distinctUntilChanged(),
        switchMap(search => this.searchName(search))
      );

    console.log("this.ngAfterViewInitngAfterViewInitngAfterViewInitngAfterViewInitngAfterViewInit")

  }
  searchName(event: any) {
    const name = event.query;

    return this.formDataProvider.findVehicleName(name).pipe(
      map(arr => arr
        .filter(e => e.name.toString().toLocaleLowerCase().indexOf(name.toString().toLocaleLowerCase()) !== -1)
      ),
    )
  }

  search(event) {
    console.log('deeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    // const filtered : any[] = [];
    // const query = event.query;
    //
    // for(let i = 0; i < this.countries.length; i++) {
    //   const country = this.countries[i];
    //   if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
    //     filtered.push(country);
    //   }
    // }
    //
    this.countries = this.items;
    console.log('this.countries');
    console.log(this.items);

    console.log(this.countries);
  }

  ngOnInit(): void {
  }

//
// get lable(): string {
//     return (<BaseFormControl>this.form.controls['pz']).label;
// }

}

