import {
  ChangeDetectionStrategy, Component
} from '@angular/core';

import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { GridComponentClass, SearchNgrxGridService } from '@zyweb/shared/grid/core';

import { VehicleUseStateGridPresenter } from './vehicle-use-state-grid.presenter';

@Component({
  selector: 'zyweb-vehicle-use-state-grid',
  templateUrl: './vehicle-use-state-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleUseStateGridComponent extends GridComponentClass<VehicleUseState> {
  constructor( vehicleUseStateGridPresenter: VehicleUseStateGridPresenter,
               searchNgrxGridService: SearchNgrxGridService
  ) {
    super();
    this.gridPresenter = vehicleUseStateGridPresenter;
    this.searchNgrxGridService = searchNgrxGridService
  }

}
