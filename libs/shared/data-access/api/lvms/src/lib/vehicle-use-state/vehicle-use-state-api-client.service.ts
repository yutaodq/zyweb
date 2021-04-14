// import { Injectable } from '@angular/core';
// import { HttpHeaders } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { Update } from '@ngrx/entity';
//
// import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
// import { environment } from '@zyweb/shared/util/environments';
//
// import { ApiService } from '../api';
// import { ExistsByNameApi, FindByNameApi } from '../..';
//
// // const FEATURE_URL = '/vehicle_use_states';
// const FEATURE_URL = '/vehicleStates';
// const FEATURE_URL_FULL = FEATURE_URL + '/';
//
// @Injectable()
// export class VehicleUseStateApiClient implements FindByNameApi, ExistsByNameApi {
//   private readonly api = environment.baseUrl;
//
//   constructor(private apiService: ApiService ) {  }
//
//   public update(vehicleUseState: Update<VehicleUseState>): Observable<VehicleUseState> {
//     return this.apiService.put(FEATURE_URL_FULL + vehicleUseState.id , vehicleUseState.changes);
//   }
//
//   public getCollection(): Observable<VehicleUseState[]> {
//     return this.apiService.get<VehicleUseState[]>(FEATURE_URL);
//
//   }
//
//   public getVehicleUseStateDetails(id: string): Observable<VehicleUseState> {
//     return this.apiService.get<VehicleUseState>(FEATURE_URL_FULL + id);
//   }
//
//   public removeVehicleUseState(id: string): Observable<VehicleUseState> {
//     return this.apiService.delete<VehicleUseState>(FEATURE_URL_FULL + id);
//   }
//
//   public addVehicleUseState(vehicleUseState: VehicleUseState): Observable<VehicleUseState> {
//     return this.apiService.post(FEATURE_URL_FULL, vehicleUseState);
//   }
//
//   // public findByName(name: string): Observable<VehicleUseState[]> {
//   //   const URL = FEATURE_URL+'/findByName';
//   //   return this.apiService.get<VehicleUseState[]>(
//   //     URL,
//   //     new HttpParams().set('name', name)
//   //   );
//   // }
//
//   public findByName(name: string): Observable<VehicleUseState[]> {
//     return this.apiService.get<VehicleUseState[]>(
//       FEATURE_URL_FULL+'findByName/'+ name
//     );
//   }
//
//   public existsByName(name: string): Observable<boolean> {
//     return this.apiService.get<boolean>(
//       FEATURE_URL_FULL+'existsByName/'+ name
//     );
//   }
//
//
//   private handleError(error: Response | any) {
//     console.error('ApiService::handleError', error);
//     return Observable.throw(error);
//   }
//
//   get headers(): HttpHeaders {
//     const headersConfig = {
//       'Content-Type': 'application/json;charset=UTF-8',
//       Accept: 'application/json'
//     };
//
//     return new HttpHeaders(headersConfig);
//   }
//
// }
