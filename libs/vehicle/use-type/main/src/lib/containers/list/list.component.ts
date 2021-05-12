import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { ListVehicleUseTypeService } from '../../services';

@Component({
  selector: 'zyweb-vehicle-use-type-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  constructor(
    private _logger: NGXLogger,
    public listService: ListVehicleUseTypeService,

  ) {

  }

  ngOnInit(): void {
    this._logger.debug('日志功能：ListComponent');
  }

  onSelectData(vehicleUseType: VehicleUseType) {
    this.listService.showDetail(vehicleUseType.id)
  }

  get rowViewModel$() {
    return this.listService.rowViewModel$;
  }

  onCreate() {
    this.listService.create();
  }


}
