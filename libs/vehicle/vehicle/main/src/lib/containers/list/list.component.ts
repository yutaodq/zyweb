import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { VehicleFacade } from '@zyweb/vehicle/vehicle/data-access/store';
import { ListVehicleService } from '../../services/list-vehicle.service';

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
    public listService: ListVehicleService,

  ) {

  }

  ngOnInit(): void {
    this._logger.debug('日志功能：ListComponent');
  }

  onSelectData(vehicle: Vehicle) {
    this._facade.showDetail(vehicle);
  }

  get facade() {
    return this._facade;
  }

  onCreate() {
    this._facade.createVehicle();
  }


}
