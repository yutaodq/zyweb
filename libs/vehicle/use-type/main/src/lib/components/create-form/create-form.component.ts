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
import {  FormGroup,  } from '@angular/forms';
import { FormlyFieldConfig,  FormlyFormOptions } from '@ngx-formly/core';
import {  VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import {  Subscription } from 'rxjs';
import { VehicleUseTypesApiClient } from '@zyweb/shared/data-access/api/lvms';
import { MasterCreateCommand } from '@zyweb/shared/util/utility';

@Component({
  selector: 'zyweb-vehicle-use-type-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
  providers: [CreateFormPresenter, VehicleUseTypesApiClient]
  // changeDetection: ChangeDetectionStrategy.OnPush
})


export class CreateFormComponent implements OnInit, OnDestroy {
  @Input()
  private _command: MasterCreateCommand<VehicleUseType>;
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
              label: '车辆用途',
              description: 'dfffffffffffffffffffffffffff',
              placeholder: '车辆用途',
              required: true,
              minLength: 2,
              attributes: { zywebOnlyNumbers: null },
            },
            modelOptions: {
              updateOn: 'blur' //失去焦点后验证
            },
            asyncValidators: {
              uniqueName: this._formPresenter.exists()
            }
          }
        ]
      },
      { template: '<hr /> ' },
      {
        key: 'description',
        type: 'input',
        templateOptions: {
          label: '用途描述',
          placeholder: ''
        }
      }
    ];

  constructor(private _formPresenter: CreateFormPresenter) {
  }

  ngOnInit(): void {
    this.registerEvents();
  }

  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(
      this._formPresenter.add$.subscribe(vehicleUseType => this._command.onAdd(vehicleUseType)),
      this._formPresenter.cancel$.subscribe(_ => this._command.onCancel),

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

