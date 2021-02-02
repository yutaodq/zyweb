import { Injectable } from '@angular/core';

import { Adapter, GET, HttpService, Path, DELETE, POST, Body } from '@zyweb/shared/data-access/api/http-service';
import { Observable } from 'rxjs';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';

@Injectable()
export class VehicleUseTypesApiClient extends HttpService {
  // @GET('/vehicleUseTypes')
  @GET('/vehicle_use_types')
  public getCollection(): Observable<any> {

    return null;
  }

  @GET('/vehicle_use_types/{id}')
  // @Adapter(VehiclesService.vehicleDetailsAdapter)
  public getVehicleUseTypeDetails(@Path('id') id: string): Observable<any> {
    return null;
  }

  @DELETE('/vehicle_use_types/{id}')
  // @Adapter(VehiclesService.vehicleDetailsAdapter)
  public getRemoveVehicleUseType(@Path('id') id: string): Observable<any> {
    console.log(`onSelectData(event):+ selectDataId+ selectDataId+ selectDataId` );
    return null;
  }

}