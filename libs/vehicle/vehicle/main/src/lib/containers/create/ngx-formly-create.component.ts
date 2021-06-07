// import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
//
// import { Subscription } from 'rxjs';
// import { Vehicle, VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
// import { CreateVehicleService } from '../../services/create-information.service';
// import { MasterCreateCommand } from '@zyweb/shared/util/utility';
// import {
//   CreateStructureForm,
//   CreateStructureFormActions,
//   CreateStructureFormDataProvider,
//   CreateStructureFormFactory
// } from './providers';
//
// /*
// https://github.com/vladeye/druo-dashboard-app/tree/master/src/app/content/pages
// D:\学习案例\druo-dashboard\src\app\content\pages\components\invoices\invoices-routing.module.ts
//  */
// @Component({
//   selector: 'zyweb-information-create',
//   templateUrl: './create.component.html',
//   styleUrls: ['./create.component.scss'],
//   providers: [
//     CreateStructureFormFactory,
//     {
//       provide: CreateStructureForm,
//       useFactory: (factory: CreateStructureFormFactory) => factory.create(),
//       deps: [CreateStructureFormFactory]
//     },
//     CreateStructureFormDataProvider,
//     CreateStructureFormActions
//   ],
//
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
//
// export class CreateComponent implements  MasterCreateCommand<Vehicle>, OnInit, OnDestroy {
//
//   private subscriptions: Array<Subscription> = [];
//   public information:        Vehicle;
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
//   onAdd(information: Vehicle) {
//     this._createService.add(information)
//   }
//
//   /**
//    * Registers events
//    */
//   private registerEvents(): void {
//   }
// }
