// import {
//   ChangeDetectionStrategy, ChangeDetectorRef,
//   Component, Directive,
//   EventEmitter,
//   inject,
//   Injector,
//   Input, OnDestroy,
//   OnInit,
//   Output
// } from '@angular/core';
// import { v4 as uuidv4 } from 'uuid';
//
// import { AbstractControl, FormGroup } from '@angular/forms';
// import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
// import { Vehicle, VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
// import { Observable, Subscription } from 'rxjs';
// import { CreateVehicleService, loadForms, loadSteps } from '../../services';
// import { MasterCreateCommand } from '@zyweb/shared/util/utility';
// import { concatAll, filter, first, map } from 'rxjs/operators';
//
//
// @Component({
//   selector: 'zyweb-information-create-form',
//   templateUrl: './ngx-formly-create-spartacus-form.component.html',
//   styleUrls: ['./create-information-form.component.scss'],
//   providers: []
//   // changeDetection: ChangeDetectionStrategy.OnPush
// })
//
//
// export class NgxFormlyCreateForm implements OnInit, OnDestroy {
//   @Input()
//   private _command: MasterCreateCommand<Vehicle>;
//
//   private subscriptions: Array<Subscription> = [];
//
//   private _form = new FormGroup({});
//
//   private _model: any = {};
//   private _options: FormlyFormOptions = {};
//   public fields: FormlyFieldConfig[];
//
//
//
//   constructor(
//     private _createVehicleService: CreateVehicleService
//   ) {
//   }
//
//   ngOnInit(): void {
//
//     this.registerEvents();
//     loadForms(this._createVehicleService).subscribe(
//       response => {
//         this.fields = response;
//         // this.initializeElements();
//       }
//     )
//
//   }
//
//   private registerEvents(): void {
//     // 订阅车辆详情
//     this.subscriptions.push(
//     );
//   }
//
//   ngOnDestroy() {
//     this.subscriptions.forEach(sub => sub.unsubscribe());
//   }
//
//   onSubmit(model: any) {
//     this.save();
//   }
//
//   private save(): void {
//     if (!this.isFormValid()) {
//       return;
//     }
//     const information: Vehicle = this.model as Vehicle;
//     /*
//       可写成 ( this.isEmpty(information.id) ) && (information.id = uuidv4());
//       但 tslint.json出现报警信息
//      */
//     if (this.isEmpty(information.id)) {
//       information.id = uuidv4();
//     }
//
//     Object.keys(information).forEach(
//       (key) => (information[key] === null || information[key] === '') && delete information[key]);
//
//     this.command.onAdd(information);
//   }
//
//   private isEmpty(id: string) {
//     let isEmpty = false;
//     if (id === undefined || id === null || id === '') {
//       isEmpty = true;
//     }
//     return isEmpty;
//   }
//
//   public cancelCreate(): void {
//     this.command.onCancel();
//   }
//
//   public reset(): void {
//     this.options.resetModel();
//   }
//
//   /*
//
//     */
//   public isFormValid() {
//     return this._form?.valid;
//   }
//
//   public canSave() {
//     return this.form.valid && this.form.pristine;
//   }
//
//
//   /*
// Get方法
//  */
//   get form(): FormGroup {
//     return this._form;
//   }
//
//   get model() {
//     return this._model;
//   }
//
//   get options(): FormlyFormOptions {
//     return this._options;
//   }
//
//   get command(): MasterCreateCommand<Vehicle> {
//     return this._command;
//   }
//
// }
//
