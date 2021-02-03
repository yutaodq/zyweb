import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseTypesFacade } from '@zyweb/shared/data-access/facade/lvms';
import { NotificationService } from '@zyweb/shared/util/message';

@Component({
  selector: 'zyweb-vehicle-use-type-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [VehicleUseTypesFacade]
})

export class ListComponent implements OnInit {
  constructor(
    private _facade: VehicleUseTypesFacade,
    private _logger: NGXLogger,
    private _notification: NotificationService,

  ) {

  }

  ngOnInit(): void {
    this._logger.debug('日志功能：NGXLogger Your log message goes here');
  }

  onSelectData(vehicleUseType: VehicleUseType) {
    this._facade.showDetail(vehicleUseType);
    this._notification.showMessage({severity: 'success', summary: '提示信息：', detail: '您已经删除了一台车辆信息' });
  }

  get facade() {
    return this._facade;
  }

  create() {

    this._facade.createVehicleUseType();

    // this._logger.debug('日志功能：create');
    // this.router.navigate(['vehicles', 'create']);

  }


}
