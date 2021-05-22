// import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
//
// import { Subscription } from 'rxjs';
// import { Vehicle, VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
// import { CreateVehicleService } from '../../services/create-vehicle.service';
// import { MasterCreateCommand } from '@zyweb/shared/util/utility';
// import {
//   VehicleCreateForm,
//   VehicleCreateFormActions,
//   VehicleCreateFormDataProvider,
//   VehicleCreateFormFactory
// } from './providers';
//
// /*
// https://github.com/vladeye/druo-dashboard-app/tree/master/src/app/content/pages
// D:\学习案例\druo-dashboard\src\app\content\pages\components\invoices\invoices-routing.module.ts
//  */
// @Component({
//   selector: 'zyweb-vehicle-create',
//   templateUrl: './create.component.html',
//   styleUrls: ['./create.component.scss'],
//   providers: [
//     VehicleCreateFormFactory,
//     {
//       provide: VehicleCreateForm,
//       useFactory: (factory: VehicleCreateFormFactory) => factory.create(),
//       deps: [VehicleCreateFormFactory]
//     },
//     VehicleCreateFormDataProvider,
//     VehicleCreateFormActions
//   ],
//
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
//
// export class CreateComponent implements  MasterCreateCommand<Vehicle>, OnInit, OnDestroy {
//
//   private subscriptions: Array<Subscription> = [];
//   public vehicle:        Vehicle;
//   public commands = this;
//
//   constructor(
//     private _createService: CreateVehicleService,
//   ) {}
//
//   ngOnInit() {
//     this.registerEvents();
//   }
//
//   ngOnDestroy() {
//     this.subscriptions.forEach(sub => sub.unsubscribe());
//   }
//
//   onCancel() {
//     this._createService.cancel()
//   }
//
//   onAdd(vehicle: Vehicle) {
//     this._createService.add(vehicle)
//   }
//
//   /**
//    * Registers events
//    */
//   private registerEvents(): void {
//   }
// }
