import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator } from '@ngrx/data';
import { VehicleUseState} from '@zyweb/shared/data-access/model/lvms';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class VehicleUseStateDataService extends DefaultDataService<VehicleUseState> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, defaultDataServiceConfig: DefaultDataServiceConfig) {
    super('VehicleUseState', http, httpUrlGenerator, defaultDataServiceConfig);
  }

}
