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

import { CreateFormPresenter } from './create-form.presenter';
import {  FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import {  Subscription } from 'rxjs';
import { CreateVehicleService } from '../../services/create-vehicle.service';
import { MasterCreateCommand } from '@zyweb/shared/util/utility';

@Component({
  selector: 'zyweb-vehicle-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
  providers: [CreateFormPresenter]
  // changeDetection: ChangeDetectionStrategy.OnPush
})


export class CreateFormComponent implements OnInit, OnDestroy {
  @Input()
  private _command: MasterCreateCommand<Vehicle>;

  private subscriptions: Array<Subscription> = [];


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
              // placeholder: '车辆名称',
              required: true,
              minLength: 2,
            },
            modelOptions: {
              updateOn: 'blur' //失去焦点后验证
            },
            asyncValidators: {
              uniqueName: this._createVehicleService.isNameExists()
            }
          },
          {
            className: 'col-md-6',
            key: 'zt',
            type: 'select',
            templateOptions: {
              label: '使用状态',
              options: this._createVehicleService.getVehiclesUseState(),
              valueProp: 'id',
              labelProp: 'name',

            }
          }
        ]
      },
      { template: '<hr /> ' },
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-md-4',
            key: 'type',
            type: 'input',
            templateOptions: {
              label: '车辆用途',
            }
          },
          {
            className: 'col-md-4',
            key: 'pz',
            type: 'input',
            templateOptions: {
              label: '外部牌照',
              minLength: 2
            }
          },
          {
            className: 'col-md-4',
            key: 'nbpz',
            type: 'input',
            templateOptions: {
              label: '内部牌照',
              minLength: 2
            }
          }
        ]
      },
      { template: '<hr /> ' }, {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: '车辆备注',
        rows: 4,
        placeholder: ''
      }
    }
    ];

  constructor(
    private _formPresenter: CreateFormPresenter,
              private _createVehicleService: CreateVehicleService
  ) {
  }

  ngOnInit(): void {
    this.registerEvents();
  }

  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(
      this._formPresenter.add$.subscribe(vehicle => this._command.onAdd(vehicle)),
      this._formPresenter.cancel$.subscribe(name => this._command.onCancel()),
      // this._formPresenter.reset$.subscribe(name => this.resetEvent.emit(name))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onSubmit(model: any) {
    this._formPresenter.save();
  }

  public cancelCreate(): void {
    this._formPresenter.cancel();
  }

  public reset(): void {
    this._formPresenter.reset();
  }

  public get isFormValid() {
    return this._formPresenter.isFormValid;
  }

  canSave() {
    return this.form.valid && this.form.pristine;
  }

  get form(): FormGroup {
    return this._formPresenter.form;
  }

  get model() {
    return this._formPresenter.model;
  }

  get options(): FormlyFormOptions {
    return this._formPresenter.options;
  }
}

