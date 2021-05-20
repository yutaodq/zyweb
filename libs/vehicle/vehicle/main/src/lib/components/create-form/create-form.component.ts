import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, Directive,
  EventEmitter,
  inject,
  Injector,
  Input, OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { AbstractControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Vehicle, VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { Observable, Subscription } from 'rxjs';
import { CreateVehicleService, loadForms, loadSteps } from '../../services';
import { MasterCreateCommand } from '@zyweb/shared/util/utility';
import { concatAll, filter, first, map } from 'rxjs/operators';


@Component({
  selector: 'zyweb-vehicle-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
  providers: []
  // changeDetection: ChangeDetectionStrategy.OnPush
})


export class CreateFormComponent implements OnInit, OnDestroy {
  @Input()
  private _command: MasterCreateCommand<Vehicle>;

  private subscriptions: Array<Subscription> = [];

  private _form = new FormGroup({});

  private _model: any = {};
  private _options: FormlyFormOptions = {};
  public fields: FormlyFieldConfig[];

  public fields: FormlyFieldConfig[] =
    [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-md-6',
            key: 'name',
            type: 'input',
            focus: true,
            templateOptions: {
              label: '车辆名称',
  //             // placeholder: '车辆名称',
  //             required: true,
  //             minLength: 2,
  //           },
  //           modelOptions: {
  //             updateOn: 'blur' //失去焦点后验证
  //           },
  //           asyncValidators: {
  //             // uniqueName: this._createVehicleService.isNameExists()
  //           }
  //         },
  //         {
  //           className: 'col-md-6',
  //           key: 'zt',
  //           type: 'select',
  //           templateOptions: {
  //             label: '使用状态',
  //             // placeholder: 'Placeholder',
  //             options: this._createVehicleService.getVehiclesUseState(),
  //             valueProp: 'id',
  //             labelProp: 'name',
  //             change: (field, $event, ) => {
  //             // change: (field, formControl: AbstractControl) => {
  //               console.log( {field, $event});
  //               const ad: any[] | Observable<any[]> = field.templateOptions.options;
  //               console.log( {ad});
  //               console.log( 'ddddddddddddddddddddddddddddddddddd');
  //
  //               const id = field.formControl.value;
  //               // let named: VehicleUseState;
  //               let named;
  //
  //               // this._createVehicleService.getVehiclesUseState()
  //               //    .subscribe((a) =>
  //               //   { named = a[2].name}
  //               // )
  //
  //               this._createVehicleService.getVehiclesUseState().pipe(
  //                 concatAll(),
  //                 filter(stated => stated.id===id),
  //                 first()
  //               ).subscribe((avd) =>
  //                 { named = avd.name}
  //               )
  //               console.log(named);
  //
  //               // this.form.get('pz').setValue('aaadddddddd');
  //               field.form.get('pz').setValue(named);
  //             }
  //             // change: (field, $event) => {
  //             //   const value = $event.srcElement.value;
  //             //   const durationValue = value / 5;
  //             //   const newModel = { ...this.model1, durationValue };
  //             //   this.model1 = newModel;
  //             //   console.log({ field, $event });
  //             // },
  //
  //           },
  //           expressionProperties: {
  //             // apply expressionProperty for disabled based on formState
  //             // 'pz.templateOptions.value' : 'daff'
  //           },
  //           hooks: {
  //             onChanges: (data) => {
  //               console.log({ data });
  //             },
  //           //   onChanges: field => {
  //           //     // field.formControl.setValue(field.templateOptions.options[0].name);
  //           //     field.templateOptions.options = this._createVehicleService.getVehiclesUseState();
  //           //     console.log('afsfsfsdddddsfdsfds:' + field.templateOptions.options.pipe(map( a => a[name])))
  //           //     this.form.get('pz').setValue(field.templateOptions.options[0]);
  //           //     // this._model = {
  //           //     //   ...this._model,
  //           //     //   pz: 'value',
  //           //     // };
  //           //   }
  //           }
  //         }
  //       ]
  //     },
  //
  //     { template: '<hr /> ' },
  //     {
  //       fieldGroupClassName: 'row',
  //       fieldGroup: [
  //         {
  //           className: 'col-md-4',
  //           key: 'type',
  //           type: 'input',
  //           templateOptions: {
  //             label: '车辆用途',
  //           }
  //         },
  //         {
  //           className: 'col-md-4',
  //           key: 'pz',
  //           type: 'input',
  //           templateOptions: {
  //             label: '外部牌照',
  //             minLength: 2
  //           }
  //         },
  //         {
  //           className: 'col-md-4',
  //           key: 'nbpz',
  //           type: 'input',
  //           templateOptions: {
  //             label: '内部牌照',
  //             minLength: 2
  //           }
  //         }
  //       ]
  //     },
  //     { template: '<hr /> ' }, {
  //     key: 'description',
  //     type: 'textarea',
  //     templateOptions: {
  //       label: '车辆备注',
  //       rows: 4,
  //       placeholder: ''
  //     }
  //   },
  //     {
  //       type: 'tabs',
  //       fieldGroup:
  //         [
  //           {
  //             templateOptions: {
  //               label: '练习一',
  //               // icon: 'pi-apple'
  //             },
  //             fieldGroup: [
  //               {
  //                 key: 'firstname',
  //                 type: 'input',
  //                 templateOptions: {
  //                   label: 'First name',
  //                   required: true
  //                 }
  //               },
  //               {
  //                 key: 'age',
  //                 type: 'input',
  //                 templateOptions: {
  //                   type: 'number',
  //                   label: 'Age',
  //                   required: true
  //                 }
  //               }
  //             ]
  //           },
  //           {
  //             templateOptions: { label: 'Destination' },
  //             fieldGroup: [
  //               {
  //                 key: 'country',
  //                 type: 'input',
  //                 templateOptions: {
  //                   label: 'Country',
  //                   required: true
  //                 }
  //               }
  //             ]
  //           },
  //           {
  //             templateOptions: { label: 'Day of the trip' },
  //             fieldGroup: [
  //               {
  //                 key: 'day',
  //                 type: 'input',
  //                 templateOptions: {
  //                   type: 'date',
  //                   label: 'Day of the trip',
  //                   required: true
  //                 }
  //               }
  //             ]
  //           }
  //         ],
  //     }
  //
  //   ];

  constructor(
    private _createVehicleService: CreateVehicleService
  ) {
  }

  ngOnInit(): void {

    this.registerEvents();
    loadSteps(this._createVehicleService).subscribe(
      response => {
        this.fields = response;
        // this.initializeElements();
      }
    );
    // loadForms(this._createVehicleService).subscribe(
    //   response => {
    //     this.fields = response;
    //     // this.initializeElements();
    //   }
    // )

  }

  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onSubmit(model: any) {
    this.save();
  }

  private save(): void {
    if (!this.isFormValid()) {
      return;
    }
    const vehicle: Vehicle = this.model as Vehicle;
    /*
      可写成 ( this.isEmpty(vehicle.id) ) && (vehicle.id = uuidv4());
      但 tslint.json出现报警信息
     */
    if (this.isEmpty(vehicle.id)) {
      vehicle.id = uuidv4();
    }

    Object.keys(vehicle).forEach(
      (key) => (vehicle[key] === null || vehicle[key] === '') && delete vehicle[key]);

    this.command.onAdd(vehicle);
  }

  private isEmpty(id: string) {
    let isEmpty = false;
    if (id === undefined || id === null || id === '') {
      isEmpty = true;
    }
    return isEmpty;
  }

  public cancelCreate(): void {
    this.command.onCancel();
  }

  public reset(): void {
    this.options.resetModel();
  }

  /*

    */
  public isFormValid() {
    return this._form?.valid;
  }

  public canSave() {
    return this.form.valid && this.form.pristine;
  }


  /*
Get方法
 */
  get form(): FormGroup {
    return this._form;
  }

  get model() {
    return this._model;
  }

  get options(): FormlyFormOptions {
    return this._options;
  }

  get command(): MasterCreateCommand<Vehicle> {
    return this._command;
  }

}

