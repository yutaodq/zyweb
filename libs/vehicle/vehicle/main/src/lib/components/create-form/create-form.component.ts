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


@Component({
  selector: 'zyweb-vehicle-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
  providers: []
  // changeDetection: ChangeDetectionStrategy.OnPush
})


export class CreateFormComponent  {
  private subscriptions: Array<Subscription> = [];

  @Input()
  form: FormGroup;

  constructor(
    private _createVehicleService: CreateVehicleService
  ) {
  }

get lable(): string {
    return (<BaseFormControl>this.form.controls['pz']).label;
}

}

