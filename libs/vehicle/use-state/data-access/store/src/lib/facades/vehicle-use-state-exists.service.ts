/*
学习ngrx官网案例 book
D:\学习案例\ngrx-master\projects\example-app\src\app\books\guards\book-exists.guard.ts
 */
import { Injectable, Injector } from '@angular/core';
import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { StateExistsService } from '@zyweb/shared/util/utility';

@Injectable()
export class VehicleUseStateExistsService extends StateExistsService<VehicleUseState> {
  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  entityName(): string {
    return 'VehicleUseState';
  }
}
