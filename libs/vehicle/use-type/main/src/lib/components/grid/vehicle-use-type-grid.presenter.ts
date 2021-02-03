import {
  ChangeDetectionStrategy,
  Component, Injectable,
  Input
} from '@angular/core';

import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import {  GridOptionsModel } from '@zyweb/shared/grid/ui';

@Injectable()
export class VehicleUseTypeGridPresenter extends GridOptionsModel<VehicleUseType> {

  constructor(
  ) {
    super( );
  }
  public columnDefs() {
    return require('./vehicle-use-type-grid.json');
  }

}

