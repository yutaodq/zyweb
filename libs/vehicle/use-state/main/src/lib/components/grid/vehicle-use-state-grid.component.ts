import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, EventEmitter,
  Input, OnDestroy, OnInit, Output
} from '@angular/core';

import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseStateGridPresenter } from './vehicle-use-state-grid.presenter';
import { VehicleSearchNgrxGridService } from '@zyweb/shared/data-access/facade/lvms';
import { GridComponentClass,  } from '@zyweb/shared/grid/core';

@Component({
  selector: 'zyweb-wehicle-grid',
  templateUrl: './vehicle-use-state-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleUseStateGridComponent extends GridComponentClass<VehicleUseState> {
  constructor( vehicleGridPresenter: VehicleUseStateGridPresenter,
              private vehicleSearchNgrxGridService: VehicleSearchNgrxGridService
  ) {
    super(vehicleSearchNgrxGridService);
    this.gridPresenter = vehicleGridPresenter;
  }

}
