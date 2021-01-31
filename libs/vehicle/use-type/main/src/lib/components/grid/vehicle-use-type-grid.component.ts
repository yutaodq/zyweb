import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { VehicleUseTypeColumnsBuilder } from '../../grid/vehicle-use-type-columns.builder';

import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { BaseGridViewModel, IGridColumnsBuilder } from '@zyweb/shared/ui/grid';
import { VehicleUseTypeSearchNgrxGridService } from '@zyweb/shared/data-access/facade/lvms';

@Component({
  selector: 'zyweb-vehicle-use-type-grid',
  templateUrl: './vehicle-use-type-grid.component.html',
  styleUrls: ['./vehicle-use-type-grid.component.scss'],
  providers: [ VehicleUseTypeColumnsBuilder, VehicleUseTypeSearchNgrxGridService],
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class VehicleUseTypeGridComponent extends BaseGridViewModel<Vehicle> {

  @Input() loading = true;
  private readonly _gridColumnsBuilder: IGridColumnsBuilder;


  constructor(searchNgrxGridService: VehicleUseTypeSearchNgrxGridService,
  vehicleColumnsBuilder: VehicleUseTypeColumnsBuilder
  ) {
    super( searchNgrxGridService);
    this._gridColumnsBuilder = vehicleColumnsBuilder
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

