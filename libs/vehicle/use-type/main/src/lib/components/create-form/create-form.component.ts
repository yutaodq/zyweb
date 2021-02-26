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
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { Observable, of, Subscription } from 'rxjs';
import { VehicleUseTypesApiClient } from '@zyweb/shared/data-access/api/lvms';

@Component({
  selector: 'zyweb-vehicle-use-type-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
  providers: [CreateFormPresenter, VehicleUseTypesApiClient]
  // changeDetection: ChangeDetectionStrategy.OnPush
})


export class CreateFormComponent implements OnInit, OnDestroy {
  @Output() addEvent: EventEmitter<Vehicle> = new EventEmitter();
  @Output() cancelEvent: EventEmitter<string> = new EventEmitter();
  @Output() resetEvent: EventEmitter<string> = new EventEmitter();
  private subscriptions: Array<Subscription> = [];


  public fields: FormlyFieldConfig[] =
    [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-md-6',
            key: 'name',
            type: 'inputLx',
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
        type: 'inputLx',
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
      this._formPresenter.add$.subscribe(vehicleUseType => this.addEvent.emit(vehicleUseType)),
      this._formPresenter.cancel$.subscribe(name => this.cancelEvent.emit(name)),
      this._formPresenter.reset$.subscribe(name => this.resetEvent.emit(name))
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

