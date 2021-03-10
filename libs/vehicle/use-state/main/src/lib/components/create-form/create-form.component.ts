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
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormBuilder, FormlyFormOptions } from '@ngx-formly/core';
import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { Observable, of, Subscription } from 'rxjs';
import { VehicleUseStateApiClient } from '@zyweb/shared/data-access/api/lvms';
import { MasterCreateCommand } from '@zyweb/shared/util/utility';

@Component({
  selector: 'zyweb-vehicle-use-state-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
  providers: [CreateFormPresenter, VehicleUseStateApiClient],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class CreateFormComponent implements OnInit, OnDestroy {
  @Input()
  private _command: MasterCreateCommand<VehicleUseState>;

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
              label: '状态名称',
              required: true,
              minLength: 2,
            },
            modelOptions: {
              updateOn: 'blur' //失去焦点后验证
            },
            asyncValidators: {
              uniqueName: this._formPresenter.exists()
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

  constructor(private _formPresenter: CreateFormPresenter) {
  }

  ngOnInit(): void {
    this.registerEvents();
  }

  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(
      this._formPresenter.add$.subscribe(vehicleUseState => this._command.onAdd(vehicleUseState)),
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

