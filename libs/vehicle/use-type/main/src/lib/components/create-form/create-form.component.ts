import {
  ChangeDetectionStrategy,
  Component,
  Input, OnDestroy,
  OnInit
} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import {  FormGroup,  } from '@angular/forms';
import { FormlyFieldConfig,  FormlyFormOptions } from '@ngx-formly/core';
import {  VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import {  Subscription } from 'rxjs';
import { MasterCreateCommand } from '@zyweb/shared/util/utility';
import { CreateVehicleUseTypeService } from '../../services';
import {loadForms} from '../../services';

@Component({
  selector: 'zyweb-vehicle-use-type-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class CreateFormComponent implements OnInit, OnDestroy {
  @Input()
  private _command: MasterCreateCommand<VehicleUseType>;

  private subscriptions: Array<Subscription> = [];

  private _form = new FormGroup({});

  private _model: any = {};
  private _options: FormlyFormOptions = {};
  public fields: FormlyFieldConfig[] ;

  // public fields: FormlyFieldConfig[] =
  //   [
  //     {
  //       fieldGroupClassName: 'row',
  //       fieldGroup: [
  //         {
  //           className: 'col-md-6',
  //           key: 'name',
  //           type: 'input',
  //           focus: true,
  //           templateOptions: {
  //             label: '类型名称',
  //             required: true,
  //             minLength: 2
  //           },
  //           modelOptions: {
  //             updateOn: 'blur' //失去焦点后验证
  //           },
  //           asyncValidators: {
  //             uniqueName: this._createVehicleUseTypeService.isNameExists()
  //           }
  //         }
  //       ]
  //     },
  //     { template: '<hr /> ' },
  //     {
  //       key: 'description',
  //       type: 'textarea',
  //       templateOptions: {
  //         label: '车辆类型备注',
  //         rows: 4,
  //         placeholder: ''
  //       }
  //     }
  //   ];

  constructor(private _createVehicleUseTypeService: CreateVehicleUseTypeService) {  }

  ngOnInit(): void {
    this.registerEvents();
    loadForms(this._createVehicleUseTypeService).subscribe(
      response => {
        this.fields = response;
        // this.initializeElements();
      }
    )
  }

  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(
      // this._formPresenter.add$.subscribe(vehicleUseType => this._command.onAdd(vehicleUseType)),
      // this._formPresenter.cancel$.subscribe(_ => this._command.onCancel()),
    );
  }
  initializeElements(){
    // overrides = this.form.get('Overrides'); // this is null on page load
    // firstNameObj = overrides.get('First Name'); // also null on page load
  };
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /*
  按钮命令
   */
  onSubmit(model: any) {
    this.save();
  }

  public save(): void {
    if (!this.isFormValid()) {
      return;
    }
    const vehicleUseType: VehicleUseType = this.model as VehicleUseType;
    /*
      可写成 ( this.isEmpty(vehicle.id) ) && (vehicle.id = uuidv4());
      但 tslint.json出现报警信息
     */
    if (this.isEmpty(vehicleUseType.id)) {
      vehicleUseType.id = uuidv4();
    }

    Object.keys(vehicleUseType).forEach(
      (key) => (vehicleUseType[key] === null || vehicleUseType[key] === '') && delete vehicleUseType[key]);

    this.command.onAdd(vehicleUseType);
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
    return this._form.valid;
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

  get command(): MasterCreateCommand<VehicleUseType> {
    return this._command;
  }

}

