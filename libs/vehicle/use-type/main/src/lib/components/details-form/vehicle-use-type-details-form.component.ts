import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Injector,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';

@Component({
  selector: 'zyweb-vehicle-use-type-details-form',
  templateUrl: './vehicle-use-type-details-form.component.html',
  styleUrls: ['./vehicle-use-type-details-form.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleUseTypeDetailsFormComponent  {
  @Input()   public vehicleUseType:        VehicleUseType;
  constructor() {
  }

}

