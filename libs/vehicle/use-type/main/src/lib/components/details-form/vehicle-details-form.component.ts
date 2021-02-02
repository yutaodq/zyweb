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
  templateUrl: './vehicle-details-form.component.html',
  styleUrls: ['./vehicle-details-form.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleDetailsFormComponent  {
  @Input()   public vehicleUseType:        VehicleUseType;

  constructor() {
  }

}

