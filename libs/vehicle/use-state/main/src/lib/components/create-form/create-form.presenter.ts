import { Injectable } from '@angular/core';
import { AsyncValidatorFn, FormGroup } from '@angular/forms';
import { Observable, of, Subject, timer } from 'rxjs';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { v4 as uuidv4 } from 'uuid';
import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseStateApiClient } from '@zyweb/shared/data-access/api/lvms';
import { AsyncValidatorNameExistsService } from '@zyweb/shared/ui/form';


@Injectable()
export class CreateFormPresenter {
  private _add: Subject<VehicleUseState> = new Subject();
  add$: Observable<VehicleUseState> = this._add.asObservable();

  private _cancel: Subject<string> = new Subject();
  cancel$: Observable<string> = this._cancel.asObservable();

  private _reset: Subject<string> = new Subject();
  reset$: Observable<string> = this._reset.asObservable();

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
              uniqueName: this.exists.bind(CreateFormPresenter)
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

  constructor(private _apiClient: VehicleUseStateApiClient,
              private _existsService: AsyncValidatorNameExistsService) {
  }

  public exists(): AsyncValidatorFn {
    return this._existsService.exists(this._apiClient);
  }

  public cancel(): void {
    this._cancel.next('cancelCreate');
  }

  public reset(): void {
    this.options.resetModel();
  }

  public isFormValid() {
    return this._form?.valid;
  }
  canSave() {
    return this.form.valid && this.form.pristine;
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
      vehicleUseState.identifier = uuidv4();
    }

    Object.keys(vehicleUseState).forEach(
      (key) => (vehicleUseState[key] === null || vehicleUseState[key] === '') && delete vehicleUseState[key]);

    this._add.next(vehicleUseState);
  }

  private isEmpty(id: string) {
    let isEmpty = false;
    if (id === undefined || id === null || id === '') {
      isEmpty = true;
    }
    return isEmpty;
  }

  get form(): FormGroup {
    return this._form;
  }

  get model() {
    return this._model;
  }

  get options(): FormlyFormOptions {
    return this._options;
  }
}
