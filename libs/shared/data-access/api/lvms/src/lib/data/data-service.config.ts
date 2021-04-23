import { DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from '@zyweb/shared/util/environments';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.baseUrl,
  timeout: 3000, // request timeout
  entityHttpResourceUrls: {
    Vehicle: {
      entityResourceUrl: environment.clientApiUrl + '/vehicles/',
      collectionResourceUrl: environment.clientApiUrl + '/vehicles/'
    },
    VehicleUseState: {
      entityResourceUrl: environment.clientApiUrl + '/vehicleUseStates/',
      collectionResourceUrl: environment.clientApiUrl + '/vehicleUseStates/'
      // entityResourceUrl: environment.clientApiUrl+'/vehicle_use_states/',
      // collectionResourceUrl: environment.clientApiUrl+'/vehicle_use_states/'
    },
    VehicleUseType: {
      entityResourceUrl: environment.clientApiUrl + '/vehicle_use_types/',
      collectionResourceUrl: environment.clientApiUrl + '/vehicle_use_types/'
    }
  }

};
