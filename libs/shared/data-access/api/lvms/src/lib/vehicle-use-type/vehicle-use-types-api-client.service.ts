import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Adapter, GET, HttpService, Path, DELETE, POST, Body } from '@zyweb/shared/data-access/api/http-service';
import { Observable, of } from 'rxjs';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { ApiService } from '../api';
import { first, map } from 'rxjs/operators';
import { FindByNameApi } from '../..';
import { environment } from '@zyweb/shared/util/environments';
import { Update } from '@ngrx/entity';

const FEATURE_URL = '/vehicle_use_types';
const FEATURE_URL_FULL = FEATURE_URL + '/';

@Injectable()
export class VehicleUseTypesApiClient implements FindByNameApi {
  private readonly api = environment.baseUrl;

  constructor(private apiService: ApiService,
              private http: HttpClient
  ) {
  }

  public update(vehicleUseType: Update<VehicleUseType>): Observable<VehicleUseType> {
    console.log('aaaaaaaaaa:' + vehicleUseType.changes.id)
    // return this.http.put<T>(`${environment.baseUrl}${url}`, JSON.stringify(data), {
    return this.apiService.put(FEATURE_URL_FULL + vehicleUseType.id , vehicleUseType.changes);
  }

  public getCollection(): Observable<VehicleUseType[]> {
    return this.apiService.get<VehicleUseType[]>(FEATURE_URL);

  }

  public getVehicleUseTypeDetails(id: string): Observable<VehicleUseType> {
    return this.apiService.get<VehicleUseType>(FEATURE_URL_FULL + id);
  }

  public removeVehicleUseType(id: string): Observable<VehicleUseType> {
    return this.apiService.delete<VehicleUseType>(FEATURE_URL_FULL + id);
  }

  public addVehicleUseType(vehicleUseType: VehicleUseType): Observable<VehicleUseType> {
    return this.apiService.post(FEATURE_URL_FULL, vehicleUseType);
  }

  public findByName(name: string): Observable<VehicleUseType[]> {
    return this.apiService.get<VehicleUseType[]>(
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

  // public addVehicleUseType(vehicleUseType: VehicleUseType): Observable<VehicleUseType> {
  //   return this.http.post<VehicleUseType>(`http://localhost:8080/api/vehicle_use_types`, vehicleUseType);
  // }

  // create(vehicleUseType: VehicleUseType): Observable<VehicleUseType> {
  //   return this.http.post<VehicleUseType>(`http://localhost:8080/api/vehicle_use_typesdd`, vehicleUseType);
  // }
  // // @GET('/vehicleUseTypes')
  // @GET('/vehicle_use_types')
  // public getCollection(): Observable<any> {
  //
  //   return null;
  // }

  // @GET('/vehicle_use_types/{id}')
  // // @Adapter(VehiclesService.vehicleDetailsAdapter)
  // public getVehicleUseTypeDetails(@Path('id') id: string): Observable<any> {
  //   return null;
  // }

  // @DELETE('/vehicle_use_types/{id}')
  // // @Adapter(VehiclesService.vehicleDetailsAdapter)
  // public removeVehicleUseType(@Path('id') id: string): Observable<any> {
  //   console.log(`onSelectData(event):+ selectDataId+ selectDataId+ selectDataId` );
  //   return null;
  // }

  // @POST('/vehicle_use_types')
  // public getCreateVehicle(@Body vehicleUseType): Observable<any> {
  //   return null;
  // }

  // loadPublicMeetings(searchTerm:string):Observable<TaskInfo[]>{
  //   let params = new HttpParams().set("searchTerm", searchTerm);
  //   return this.httpClient.get<TaskInfo[]>(this.publicMeetingsUrl, {params: params})
  //     .pipe(map(resp => resp.map(task => TaskInfo.createInstance(task))));
  // }this.apiService.


  // public existsName(name: string): Observable<boolean> {
  //   return this.http.get<VehicleUseType[]>(
  //     'http://localhost:8080/api/vehicle_use_types',
  //     {
  //       headers: this.headers,
  //       params: new HttpParams().set('name', name)
  //     }
  //   ).pipe(
  //     first(),
  //     map(vehicleUseType => {
  //       return vehicleUseType.length === 1;
  //     }));
  // }

  // public exists(name: string): Observable<boolean> {
  //   return this.http.get<VehicleUseType[]>(
  //     'http://localhost:8080/api/vehicle_use_types',
  //     {
  //       headers: this.headers,
  //       withCredentials: true,
  //       params: new HttpParams().set('name', name)
  //     }
  //   ).pipe(
  //     take(1),
  //     map(vehicleUseType => {
  //       let exists = true;
  //       if (vehicleUseType[0] === undefined || vehicleUseType[0] === null) {
  //         exists =  false;
  //       }
  //       // console.log('validate salon name:gggggggggggggggggggggg' + vehicleUseType[0].name);
  //       return exists;
  //     }));
  //   // catchError(console.log('validate salon name:gggggggggggggggggggggg'))
  //   // return this.apiService.get<VehicleUseType>('/vehicle_use_types?name=' + name)
  // }

// console.log('validate salon name:gggggggggggggggggggggg'FEATURE_URL

  // public exists(name: string) {
  //   return this.apiService.get<VehicleUseType>(
  //     '/vehicle_use_types',
  //     new HttpParams().set('name', name))
  //     .pipe(
  //       map(vehicleUseType => console.log('validate salon name: ' + vehicleUseType.name))
  //       // catchError(this.handleError('validateSalonName', []))
  //     );
  //   // return this.apiService.get<VehicleUseType>('/vehicle_use_types?name=' + name)
  // }

}
