import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { VehicleUseTypeColumnsBuilder } from '../../grid/vehicle-use-type-columns.builder';

import {  VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { IGridColumnsBuilder } from '@zyweb/shared/grid/core';
import { BaseGridViewModel } from '@zyweb/shared/grid/ui';
import { VehicleUseTypeSearchNgrxGridService } from '@zyweb/shared/data-access/facade/lvms';

@Component({
  selector: 'zyweb-vehicle-use-type-grid',
  templateUrl: './vehicle-use-type-grid.component.html',
  styleUrls: ['./vehicle-use-type-grid.component.scss'],
  providers: [ VehicleUseTypeColumnsBuilder, VehicleUseTypeSearchNgrxGridService],
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class VehicleUseTypeGridComponent extends BaseGridViewModel<VehicleUseType> {

  @Input() loading = true;
  private readonly _gridColumnsBuilder: IGridColumnsBuilder;


  constructor(searchNgrxGridService: VehicleUseTypeSearchNgrxGridService,
  vehicleUseTypeColumnsBuilder: VehicleUseTypeColumnsBuilder
  ) {
    super( searchNgrxGridService);
    this._gridColumnsBuilder = vehicleUseTypeColumnsBuilder
  }

  protected getGridColumnsBuilder(): IGridColumnsBuilder {
    return this._gridColumnsBuilder;
  }

  protected registerFilterChangeHandlers(): void {
  }

  protected getGridStateKey(): string {
    return 'aa'
    // return GridDataStateKeys.REASSIGN_CASE;
  }
}

