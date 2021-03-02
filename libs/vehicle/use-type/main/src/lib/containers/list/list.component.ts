import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseTypesFacade } from '@zyweb/shared/data-access/facade/lvms';
import { NotificationService } from '@zyweb/shared/util/message';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'zyweb-vehicle-use-type-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ListComponent implements OnInit {
  constructor(
    private _facade: VehicleUseTypesFacade,
    private _logger: NGXLogger,
    private _notification: NotificationService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit(): void {
    this._logger.debug('日志功能：ListComponent');
  }

  onSelectData(vehicleUseType: VehicleUseType) {
    this.toastr.success('Hello world!', 'Toastr fun!');
    // this._facade.showDetail(vehicleUseType);
    // this._notification.showMessage({severity: 'success', summary: '提示信息：', detail: '您选择了一台车辆信息' });
  }

  get facade() {
    return this._facade;
  }

  onCreate() {
    this._facade.createVehicleUseType();
  }


}
