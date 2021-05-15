import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { ListVehicleService } from '../../services/list-vehicle.service';

@Component({
  selector: 'zyweb-vehicle-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ListComponent implements OnInit {
  constructor(
    private _logger: NGXLogger,
    public listService: ListVehicleService,

  ) {

  }

  ngOnInit(): void {
    this._logger.debug('日志功能：ListComponent');
  }

  onSelectData(vehicle: Vehicle) {
    this.listService.showDetail(vehicle.id)
  }

  get rowViewModel$() {
    return this.listService.rowViewModel$;
  }

  onCreate() {
    this.listService.create();
  }


}
