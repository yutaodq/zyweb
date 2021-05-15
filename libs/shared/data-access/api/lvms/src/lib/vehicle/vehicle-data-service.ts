import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator } from '@ngrx/data';
import { Vehicle, VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ExistsByNameApi } from '@zyweb/shared/data-access/api/lvms';
import { environment } from '@zyweb/shared/util/environments';
import { ApiService } from '../api';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';
const FEATURE_URL = '/vehicles';
const FEATURE_URL_FULL = FEATURE_URL + '/';

@Injectable()
export class VehicleDataService extends
  DefaultDataService<Vehicle> implements
  ExistsByNameApi{
  private readonly api = environment.baseUrl;

  constructor(http: HttpClient,
              httpUrlGenerator: HttpUrlGenerator,
              defaultDataServiceConfig: DefaultDataServiceConfig,
              private apiService: ApiService,
  ) {
    super('Vehicle', http, httpUrlGenerator, defaultDataServiceConfig);
  }

  public updateName(vehicle: Update<Vehicle>): Observable<Vehicle> {
    console.log('VehicleDataService: 修改')
    return this.apiService.put(FEATURE_URL_FULL + 'updateName' + vehicle.id , vehicle.changes);
  }

  // public findByName(name: string): Observable<Vehicle[]> {
  //   return this.apiService.get<Vehicle[]>(
  //     FEATURE_URL_FULL+'findByName/'+ name
  //   );
  // }

  public existsByName(name: string): Observable<boolean> {
    return this.apiService.get<boolean>(
      FEATURE_URL_FULL+'existsByName/'+ name
    );
  }

  get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json;charset=UTF-8',
      Accept: 'application/json'
    };

    return new HttpHeaders(headersConfig);
  }

}
