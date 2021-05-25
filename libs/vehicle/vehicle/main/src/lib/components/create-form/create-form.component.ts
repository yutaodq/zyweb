import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, Directive,
  EventEmitter,
  inject,
  Injector,
  Input, OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { AbstractControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Vehicle, VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { Observable, Subscription } from 'rxjs';
import { CreateVehicleService, loadForms, loadSteps } from '../../services';
import { MasterCreateCommand } from '@zyweb/shared/util/utility';
import { concatAll, filter, first, map } from 'rxjs/operators';
import { BaseFormControl } from '@zyweb/shared/ui/base';
import { VehicleCreateFormDataProvider } from '../../containers/create/providers';


@Component({
  selector: 'zyweb-vehicle-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
  providers: [VehicleCreateFormDataProvider]
  // changeDetection: ChangeDetectionStrategy.OnPush
})


export class CreateFormComponent  {
  private subscriptions: Array<Subscription> = [];
  filteredCountries: any[];
  countries: any[];
  items: ['Berlin', 'Frankfurt'];

  @Input()
  form: FormGroup;

  constructor(public formDataProvider: VehicleCreateFormDataProvider
  ) {
  }

  search(event) {
    console.log("sdfaaaaaaaaaaaaa");
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
    // this.filteredCountries = filtered;
  }
//
// get lable(): string {
//     return (<BaseFormControl>this.form.controls['pz']).label;
// }

}

