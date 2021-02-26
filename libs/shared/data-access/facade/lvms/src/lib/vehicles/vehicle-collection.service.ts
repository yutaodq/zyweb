import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';

@Injectable({ providedIn: 'root' })
export class VehicleCollectionService extends EntityCollectionServiceBase<Vehicle> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Vehicle', serviceElementsFactory);
  }
}
