import { DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from '@zyweb/shared/util/environments';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.baseUrl,
  timeout: 3000, // request timeout
  entityHttpResourceUrls: {
    Vehicle: {
      entityResourceUrl: environment.baseUrl + '/vehicles/',
      collectionResourceUrl: environment.baseUrl + '/vehicles/'
    },
    VehicleUseState: {
      entityResourceUrl: environment.baseUrl + '/vehicleUseStates/',
      collectionResourceUrl: environment.baseUrl + '/vehicleUseStates/'
      // entityResourceUrl: environment.clientApiUrl+'/vehicle_use_states/',
      // collectionResourceUrl: environment.clientApiUrl+'/vehicle_use_states/'
    },
    VehicleUseType: {
      entityResourceUrl: environment.baseUrl + '/vehicleUseTypes/',
      collectionResourceUrl: environment.baseUrl + '/vehicleUseTypes/'
    }
  }

};
