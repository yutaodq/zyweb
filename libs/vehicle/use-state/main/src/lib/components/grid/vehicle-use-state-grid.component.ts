import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, EventEmitter,
  Input, OnDestroy, OnInit, Output
} from '@angular/core';

import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseStateGridPresenter } from './vehicle-use-state-grid.presenter';
import { VehicleUseStateSearchNgrxGridService } from '@zyweb/shared/data-access/facade/lvms';
import { GridComponentClass,  } from '@zyweb/shared/grid/core';

@Component({
  selector: 'zyweb-wehicle-grid',
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
