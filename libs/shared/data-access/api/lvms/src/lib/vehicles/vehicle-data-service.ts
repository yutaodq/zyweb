import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator } from '@ngrx/data';
import { Vehicle, VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class VehicleDataService extends DefaultDataService<Vehicle> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, defaultDataServiceConfig: DefaultDataServiceConfig) {
    super('Vehicle', http, httpUrlGenerator, defaultDataServiceConfig);
  }
}
