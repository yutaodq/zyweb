import { Component, OnInit } from '@angular/core';
// import { NGXLogger } from 'ngx-logger';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseTypesFacade } from '@zyweb/shared/data-access/facade/lvms';
import { Router } from '@angular/router';

@Component({
  selector: 'zyweb-vehicle-use-type-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [VehicleUseTypesFacade]
})

export class ListComponent implements OnInit {


  constructor(
    private _facade: VehicleUseTypesFacade,
    private router: Router,
    // private _logger: NGXLogger
  ) {

  }

  ngOnInit(): void {
    // this._logger.debug('日志功能：Your log message goes here');
  }

  onSelectData(vehicleUseType: VehicleUseType) {
    console.log(`onSelectData(event):aaaaaaaaaaaaaaaa` );
    // this._facade.selectVehicle(vehicleUseType);
    this.router.navigate(['vehicleUseTypes', vehicleUseType.id,'detail']);
  }

  get facade() {
    return this._facade;
  }

  create() {
    // this._logger.debug('日志功能：create');
    // this.router.navigate(['vehicles', 'create']);

  }


}
