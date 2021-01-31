import { Component, OnInit } from '@angular/core';
// import { NGXLogger } from 'ngx-logger';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseTypesFacade } from '@zyweb/shared/data-access/facade/lvms';

@Component({
  selector: 'zyweb-vehicle-use-type-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [VehicleUseTypesFacade]
})

export class ListComponent implements OnInit {


  constructor(
    private _facade: VehicleUseTypesFacade,
    // private _logger: NGXLogger
  ) {

  }

  ngOnInit(): void {
    // this._logger.debug('日志功能：Your log message goes here');
  }

  onSelectData(vehicleUseType: VehicleUseType) {
    console.log(`onSelectData(event):aaaaaaaaaaaaaaaa` );
    // this._vehiclesFacade.selectVehicle(vehicle);
    // this.router.navigate(['vehicles', vehicle.id,'detail']);
  }

  get facade() {
    return this._facade;
  }

  create() {
    // this._logger.debug('日志功能：create');
    // this.router.navigate(['vehicles', 'create']);

  }


}
