import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams, HttpResponse } from '@angular/common/http';

import { Adapter, GET, HttpService, Path, DELETE, POST, Body } from '@zyweb/shared/data-access/api/http-service';
import { Observable } from 'rxjs';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import {ApiService } from '../api'
@Injectable()
export class VehicleUseTypesApiClient {
  // export class VehicleUseTypesApiClient extends HttpService {

  constructor(private apiService: ApiService,
              private http: HttpClient
              ) {}

  public getCollection(): Observable<VehicleUseType[]> {
    return this.apiService.get('/vehicle_use_types')
  }

  // public getVehicleUseTypeDetails( id: string): Observable<VehicleUseType> {
  //     console.log(`addVehicleUseTypeaddVehicleUseTypeaddVehicleUseType` );
  //   return this.http
  //     .get<VehicleUseType>(`http://localhost:8080/api/vehicle_use_types/${id}`);
  // }

  public getVehicleUseTypeDetails( id: string): Observable<VehicleUseType> {
    return this.apiService.get<VehicleUseType>('/vehicle_use_types/' + id)
  }

  public removeVehicleUseType(id: string): Observable<VehicleUseType> {
    return this.apiService.delete<VehicleUseType>('/vehicle_use_types/' + id)
  }

  public addVehicleUseType(vehicleUseType: VehicleUseType): Observable<VehicleUseType> {
    return this.apiService.post(`/vehicle_use_types/`,  vehicleUseType);
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

}
