import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

interface UpdateForm {
  id: string, description: string
}
@Component({
  selector: 'zyweb-vehicle-use-type-update-name-form',
  templateUrl: './update-main-form.component.html',
  styleUrls: ['./update-main-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UpdateMainFormComponent {
  private _form = new FormGroup({});

  private _model : UpdateForm;
  private _options: FormlyFormOptions = {};

  public fields: FormlyFieldConfig[] =
    [
      {
        key: 'description',
        type: 'textarea',
        focus: true,
        templateOptions: {
          label: '使用类型说明',
          rows: 4,
          placeholder: ''
        },
      },
      { template: '<hr /> ' },
    ];

  constructor( private _ref: DynamicDialogRef,
               private _config: DynamicDialogConfig,
  ) {
    this._model = {...this._config.data}
  }
  public cancel(): void{
    this._ref.close(null)
  }

  onSubmit(model: UpdateForm) {
    this._ref.close(model)

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

