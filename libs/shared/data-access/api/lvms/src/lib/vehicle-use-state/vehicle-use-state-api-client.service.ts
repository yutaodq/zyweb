import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Update } from '@ngrx/entity';

import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { environment } from '@zyweb/shared/util/environments';

import { ApiService } from '../api';
import { FindByNameApi } from '../..';

const FEATURE_URL = '/vehicle_use_states';
const FEATURE_URL_FULL = FEATURE_URL + '/';

@Injectable()
export class VehicleUseStateApiClient implements FindByNameApi {
  private readonly api = environment.baseUrl;

  constructor(private apiService: ApiService,
              private http: HttpClient
  ) {
  }

  public update(vehicleUseState: Update<VehicleUseState>): Observable<VehicleUseState> {
    return this.apiService.put(FEATURE_URL_FULL + vehicleUseState.id , vehicleUseState.changes);
  }

  public getCollection(): Observable<VehicleUseState[]> {
    return this.apiService.get<VehicleUseState[]>(FEATURE_URL);

  }

  public getVehicleUseStateDetails(id: string): Observable<VehicleUseState> {
    return this.apiService.get<VehicleUseState>(FEATURE_URL_FULL + id);
  }

  public removeVehicleUseState(id: string): Observable<VehicleUseState> {
    return this.apiService.delete<VehicleUseState>(FEATURE_URL_FULL + id);
  }

  public addVehicleUseState(vehicleUseState: VehicleUseState): Observable<VehicleUseState> {
    return this.apiService.post(FEATURE_URL_FULL, vehicleUseState);
  }

  public findByName(name: string): Observable<VehicleUseState[]> {
    return this.apiService.get<VehicleUseState[]>(
      FEATURE_URL,
      new HttpParams().set('name', name)
    );
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json;charset=UTF-8',
      Accept: 'application/json'
    };

    return new HttpHeaders(headersConfig);
  }


}
