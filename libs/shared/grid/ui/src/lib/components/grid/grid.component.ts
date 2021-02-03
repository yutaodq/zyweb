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
  templateUrl: './grid.html',
  styleUrls: ['./grid.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class GridComponent  {
  @Input()   public vehicleUseType:        VehicleUseType;

  constructor() {
  }

}

