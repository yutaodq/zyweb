import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, EventEmitter,
  Input, OnDestroy, OnInit, Output
} from '@angular/core';

import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { GridComponentClass,  } from '@zyweb/shared/grid/core';
import { VehicleUseStateSearchNgrxGridService } from '@zyweb/vehicle/use-state/data-access/store';

import { VehicleUseStateGridPresenter } from './vehicle-use-state-grid.presenter';

@Component({
  selector: 'zyweb-vehicle-use-state-grid',
  templateUrl: './vehicle-use-state-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleUseStateGridComponent extends GridComponentClass<VehicleUseState> {
  constructor( vehicleUseStateGridPresenter: VehicleUseStateGridPresenter,
              private vehicleUseStateSearchNgrxGridService: VehicleUseStateSearchNgrxGridService
  ) {
    super(vehicleUseStateSearchNgrxGridService);
    this.gridPresenter = vehicleUseStateGridPresenter;
  }

}
