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
// import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Vehicle, VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { Observable, pipe, Subscription } from 'rxjs';
// import { CreateVehicleService } from '../../services';
// import { MasterCreateCommand } from '@zyweb/shared/util/utility';
// import {
//   concatAll,
//   debounceTime,
//   distinct,
//   distinctUntilChanged,
//   filter,
//   first,
//   map,
//   switchMap,
//   toArray
// } from 'rxjs/operators';
// import { BaseFormControl } from '@zyweb/shared/ui/base';
import { VehicleCreateFormDataProvider } from '../../containers/create/providers';
import { AutoComplete } from 'primeng/autocomplete';
import { VehicleFacade } from '@zyweb/vehicle/vehicle/data-access/store';


@Component({
  selector: 'zyweb-vehicle-create-form',
  templateUrl: './create-information-form.component.html',
  styleUrls: ['./create-information-form.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})


export class CreateInformationFormComponent {
  // export class CreateInformationFormComponent implements OnInit, AfterViewInit {
  // @ViewChild('nameAutoComplete') nameAutoComplete: AutoComplete;

  // private subscriptions: Array<Subscription> = [];
  // vehicleName$: Observable<Vehicle[]>;

  @Input()
  form: FormGroup;

  constructor(
    public formDataProvider: VehicleCreateFormDataProvider,
) {
  }

  // ngAfterViewInit() {
  //   // this.vehicleName$ = this.nameAutoComplete.completeMethod
  //   //   .pipe(
  //   //     debounceTime(100),
  //   //     distinctUntilChanged(),
  //   //     switchMap(search => this.searchName(search))
  //   //   );
  //
  // }
  // // searchName(event: any) {
  // //   const name = event.query;
  // //    return this.formDataProvider.findVehicleName(name).pipe(
  // //     switchMap((vehicles) => vehicles.sort((a, b) => a.name.localeCompare(b.name))),
  // //     filter(information => information.name.toString().toLocaleLowerCase().indexOf(name.toString().toLocaleLowerCase()) !== -1),
  // //     distinct( information =>information.name),
  // //     toArray()
  // //   )
  // // }
  //
  // ngOnInit(): void {
  // }

}

