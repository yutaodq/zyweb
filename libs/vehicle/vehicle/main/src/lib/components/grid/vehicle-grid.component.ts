import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, EventEmitter,
  Input, OnDestroy, OnInit, Output
} from '@angular/core';

import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { VehicleGridPresenter } from './vehicle-grid.presenter';
import { GridComponentClass, SearchNgrxGridService } from '@zyweb/shared/grid/core';

@Component({
  selector: 'zyweb-vehicle-grid',
  templateUrl: './vehicle-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleGridComponent extends GridComponentClass<Vehicle> {
  constructor( vehicleGridPresenter: VehicleGridPresenter,
               searchNgrxGridService: SearchNgrxGridService
  ) {
    super();
    this.gridPresenter = vehicleGridPresenter;
    this.searchNgrxGridService = searchNgrxGridService
  }

}
