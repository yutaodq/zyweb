// import { Injectable } from '@angular/core';
// import { HttpClient, HttpRequest, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
//
// import { Adapter, GET, HttpService, Path, DELETE, POST, Body } from '@zyweb/shared/data-access/api/http-service';
// import { Observable, of } from 'rxjs';
// import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
// import { ApiService } from '../api';
// import { first, map } from 'rxjs/operators';
// import { FindByNameApi } from '../..';
// import { environment } from '@zyweb/shared/util/environments';
// import { Update } from '@ngrx/entity';
//
// const FEATURE_URL = '/vehicles';
// const FEATURE_URL_FULL = FEATURE_URL + '/';
//
// @Injectable()
// export class VehicleApiClient implements FindByNameApi {
//   private readonly api = environment.baseUrl;
//
//   constructor(private apiService: ApiService,
//               private http: HttpClient
//   ) {
//   }
//
//   public update(information: Update<Vehicle>): Observable<Vehicle> {
//     const {id, changes} = information;
//     return this.apiService.put(FEATURE_URL_FULL + id , changes);
//     // return this.apiService.put(FEATURE_URL_FULL + information.id , information.changes);
//   }
//
//   // updateBulk(items: Update<Item>[]) {
//   //   return forkJoin(items.map((item) => this.main(item)));
//   // }
//
//   public getCollection(): Observable<Vehicle[]> {
//     return this.apiService.get<Vehicle[]>(FEATURE_URL);
//
//   }
//
//   public getVehicleDetails(id: string): Observable<Vehicle> {
//     return this.apiService.get<Vehicle>(FEATURE_URL_FULL + id);
//   }
//
//   public removeVehicle(id: string): Observable<Vehicle> {
//     return this.apiService.delete<Vehicle>(FEATURE_URL_FULL + id);
//   }
//
//   public addVehicle(information: Vehicle): Observable<Vehicle> {
//     return this.apiService.post(FEATURE_URL_FULL, information);
//   }
//
//   public findByName(name: string): Observable<Vehicle[]> {
//     return this.apiService.get<Vehicle[]>(
//       FEATURE_URL,
//       new HttpParams().set('name', name)
//     );
//   }
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
//
// }
