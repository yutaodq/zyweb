/*
学习ngrx官网案例 book
D:\学习案例\ngrx-master\projects\example-app\src\app\books\guards\book-exists.guard.ts
 */
import { Injectable, Injector } from '@angular/core';
import { StateExistsService } from '@zyweb/shared/util/utility';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';

@Injectable()
export class VehicleUseTypesExistsService extends StateExistsService<VehicleUseType> {
  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  entityName(): string {
    return 'VehicleUseType';
  }
}
