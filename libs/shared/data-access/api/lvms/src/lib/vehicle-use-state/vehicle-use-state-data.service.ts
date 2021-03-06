import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator } from '@ngrx/data';
import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { ExistsByNameApi, FindByNameApi } from '@zyweb/shared/data-access/api/lvms';
import { environment } from '@zyweb/shared/util/environments';
import { ApiService } from '../api';

const FEATURE_URL = '/vehicleUseStates';
const FEATURE_URL_FULL = FEATURE_URL + '/';

@Injectable()
export class VehicleUseStateDataService
  extends DefaultDataService<VehicleUseState>
  implements FindByNameApi, ExistsByNameApi{

  private readonly api = environment.baseUrl;

  constructor(http: HttpClient,
              httpUrlGenerator: HttpUrlGenerator,
              defaultDataServiceConfig: DefaultDataServiceConfig,
              private apiService: ApiService,
  ) {
    super('VehicleUseState', http, httpUrlGenerator, defaultDataServiceConfig);
  }

  public updateName(vehicleUseState: Update<VehicleUseState>): Observable<VehicleUseState> {
    console.log('VehicleUseStateDataService: 修改')
    return this.apiService.put(FEATURE_URL_FULL + 'updateName' + vehicleUseState.id , vehicleUseState.changes);
  }

  public findByName(name: string): Observable<VehicleUseState[]> {
    return this.apiService.get<VehicleUseState[]>(
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
