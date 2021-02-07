import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Adapter, GET, HttpService, Path, DELETE, POST, Body } from '@zyweb/shared/data-access/api/http-service';
import { Observable, of } from 'rxjs';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { ApiService } from '../api';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class VehicleUseTypesApiClient {
  // export class VehicleUseTypesApiClient extends HttpService {

  constructor(private apiService: ApiService,
              private http: HttpClient
  ) {
  }

  public getCollection(): Observable<VehicleUseType[]> {
    return this.apiService.get<VehicleUseType[]>('/vehicle_use_types');
  }

  // public getVehicleUseTypeDetails( id: string): Observable<VehicleUseType> {
  //     console.log(`addVehicleUseTypeaddVehicleUseTypeaddVehicleUseType` );
  //   return this.http
  //     .get<VehicleUseType>(`http://localhost:8080/api/vehicle_use_types/${id}`);
  // }

  public getVehicleUseTypeDetails(id: string): Observable<VehicleUseType> {
    return this.apiService.get<VehicleUseType>('/vehicle_use_types/' + id);
  }

  public removeVehicleUseType(id: string): Observable<VehicleUseType> {
    return this.apiService.delete<VehicleUseType>('/vehicle_use_types/' + id);
  }

  public addVehicleUseType(vehicleUseType: VehicleUseType): Observable<VehicleUseType> {
    return this.apiService.post(`/vehicle_use_typesg/`, vehicleUseType);
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
  public exists(name: string) {
    return this.http.get<VehicleUseType>(
      'http://localhost:8080/api/vehicle_use_types',
      {
        headers: this.headers,
        withCredentials: true,
        params: new HttpParams().set('name', name)
      }
    ).subscribe(
      (vehicleUseType => console.log('validate salon name: ' + vehicleUseType.name))
      // catchError(this.handleError('validateSalonName', []))
    );
    // return this.apiService.get<VehicleUseType>('/vehicle_use_types?name=' + name)
  }

  get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json;charset=UTF-8',
      Accept: 'application/json'
    };

    return new HttpHeaders(headersConfig);
  }

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

// //根据公司名字获取信息 new HttpParams().set('name', term)
// http://localhost:3000/vehicle_use_types?name='a'
