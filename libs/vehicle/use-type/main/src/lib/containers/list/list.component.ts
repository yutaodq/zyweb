import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseTypeFacade } from '@zyweb/vehicle/use-type/data-access/store';

@Component({
  selector: 'zyweb-vehicle-use-type-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ListComponent implements OnInit {
  constructor(
    private _facade: VehicleUseTypeFacade,
    private _logger: NGXLogger,
  ) {

  }

  ngOnInit(): void {
    this._logger.debug('日志功能：ListComponent');
  }

  onSelectData(vehicleUseType: VehicleUseType) {
    this._facade.showDetail(vehicleUseType);
  }

  get facade() {
    return this._facade;
  }

  onCreate() {
    this._facade.createVehicleUseType();
  }


}
