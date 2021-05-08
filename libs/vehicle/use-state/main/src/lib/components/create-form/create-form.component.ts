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
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormBuilder, FormlyFormOptions } from '@ngx-formly/core';

import { Observable, of, Subscription } from 'rxjs';

import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
// import { VehicleUseStateDataService } from '@zyweb/shared/data-access/api/lvms';
import { MasterCreateCommand } from '@zyweb/shared/util/utility';
import { CreateVehicleUseStateService } from '../../services';

@Component({
  selector: 'zyweb-vehicle-use-state-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class CreateFormComponent implements OnInit, OnDestroy {
  @Input()
  private _command: MasterCreateCommand<VehicleUseState>;

  private subscriptions: Array<Subscription> = [];

  private _form = new FormGroup({});

  private _model: any = {};
  private _options: FormlyFormOptions = {};

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
              label: '状态名称',
              required: true,
              minLength: 2,
            },
            modelOptions: {
              updateOn: 'blur' //失去焦点后验证
            },
            asyncValidators: {
              // uniqueName: this._formPresenter.exists()
              uniqueName: this._createVehicleUseStateService.isNameExists()
            }
          },
        ]
      },
      { template: '<hr /> ' },
      {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: '车辆备注',
        rows: 4,
        placeholder: ''
      }
    }
    ];

  // constructor(private _formPresenter: CreateFormPresenter,
  //             private _createVehicleUseStateService: CreateVehicleUseStateService
  // ) {  }
  constructor(private _createVehicleUseStateService: CreateVehicleUseStateService) {  }

  ngOnInit(): void {
    this.registerEvents();
  }

  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(
      // this._formPresenter.add$.subscribe(vehicleUseState => this._command.onAdd(vehicleUseState)),
      // this._formPresenter.cancel$.subscribe(_ => this._command.onCancel()),
    );
  }

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
    const vehicleUseState: VehicleUseState = this.model as VehicleUseState;
    /*
      可写成 ( this.isEmpty(vehicle.id) ) && (vehicle.id = uuidv4());
      但 tslint.json出现报警信息
     */
    if (this.isEmpty(vehicleUseState.id)) {
      vehicleUseState.id = uuidv4();
    }

    Object.keys(vehicleUseState).forEach(
      (key) => (vehicleUseState[key] === null || vehicleUseState[key] === '') && delete vehicleUseState[key]);

    this.command.onAdd(vehicleUseState)
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

  get command(): MasterCreateCommand<VehicleUseState> {
    return this._command;
  }

}

