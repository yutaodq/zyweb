import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';

@Component({
  selector: 'zyweb-vehicle-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ListComponent implements OnInit {
  constructor(
    private _facade: VehicleUseStateFacade,
    private _logger: NGXLogger,

  ) {

  }

  ngOnInit(): void {
    this._logger.debug('日志功能：ListComponent');
  }

  onSelectData(vehicleUseState: VehicleUseState) {
    this._facade.showDetail(vehicleUseState);
  }

  get facade() {
    return this._facade;
  }

  onCreate() {
    this._facade.createVehicle();
  }


}
