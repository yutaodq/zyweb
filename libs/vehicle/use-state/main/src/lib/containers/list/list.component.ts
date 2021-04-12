import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { ListVehicleUseStateService } from '../../services/list-vehicle-use-state.service';

@Component({
  selector: 'zyweb-vehicle-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ListComponent implements OnInit {
  constructor(
    private _logger: NGXLogger,
    private listService: ListVehicleUseStateService,

  ) {

  }

  ngOnInit(): void {
    this._logger.debug('日志功能：ListComponent');
  }

  onSelectData(vehicleUseState: VehicleUseState) {
    this.listService.showDetail(vehicleUseState.id)
  }

  // get facade() {
  //   return this._facade;
  // }

  onCreate() {
    this.listService.create();
  }


}
