import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator } from '@ngrx/data';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { ExistsByNameApi, FindByNameApi } from '@zyweb/shared/data-access/api/lvms';
import { environment } from '@zyweb/shared/util/environments';
import { ApiService } from '../api';

const FEATURE_URL = '/vehicleUseTypes';
const FEATURE_URL_FULL = FEATURE_URL + '/';

@Injectable()
export class VehicleUseTypeDataService
  extends DefaultDataService<VehicleUseType>
  implements FindByNameApi, ExistsByNameApi{

  private readonly api = environment.baseUrl;

  constructor(http: HttpClient,
              httpUrlGenerator: HttpUrlGenerator,
              defaultDataServiceConfig: DefaultDataServiceConfig,
              private apiService: ApiService,
  ) {
    super('VehicleUseType', http, httpUrlGenerator, defaultDataServiceConfig);
  }

  public updateName(vehicleUseType: Update<VehicleUseType>): Observable<VehicleUseType> {
    console.log('VehicleUseTypeDataService: 修改')
    return this.apiService.put(FEATURE_URL_FULL + 'updateName' + vehicleUseType.id , vehicleUseType.changes);
  }

  public findByName(name: string): Observable<VehicleUseType[]> {
    return this.apiService.get<VehicleUseType[]>(
      FEATURE_URL_FULL+'findByName/'+ name
    );
  }

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
