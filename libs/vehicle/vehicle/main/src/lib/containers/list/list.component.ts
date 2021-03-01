import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { VehicleFacade } from '@zyweb/shared/data-access/facade/lvms';
import { NotificationService } from '@zyweb/shared/util/message';

@Component({
  selector: 'zyweb-vehicle-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ListComponent implements OnInit {
  constructor(
    private _facade: VehicleFacade,
    private _logger: NGXLogger,
    private _notification: NotificationService,

  ) {

  }

  ngOnInit(): void {
    this._logger.debug('日志功能：ListComponent');
  }

  onSelectData(vehicle: Vehicle) {
    this._facade.showDetail(vehicle);
    this._notification.showMessage({severity: 'success', summary: '提示信息：', detail: '您选择了一台车辆信息' });
  }

  get facade() {
    return this._facade;
  }

  onCreate() {
    this._facade.createVehicle();
    this._notification.showMessage({severity: 'success', summary: '提示信息：', detail: '新建一台车辆信息' });
  }


}
