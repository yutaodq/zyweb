import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator } from '@ngrx/data';
import { VehicleUseState} from '@zyweb/shared/data-access/model/lvms';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';

@Injectable()
export class VehicleUseStateDataService extends DefaultDataService<VehicleUseState> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, defaultDataServiceConfig: DefaultDataServiceConfig) {
    super('VehicleUseState', http, httpUrlGenerator, defaultDataServiceConfig);
  }

  update(update: Update<VehicleUseState>): Observable<VehicleUseState> {
    console.log('aaaaaaaaaaaaaaaaaaddddddddddddddddfffffffffffffff');
    return null;
  }

}
