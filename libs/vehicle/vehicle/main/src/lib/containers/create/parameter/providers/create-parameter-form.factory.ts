import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateParameterForm } from './create-parameter.form';
import { BaseFormControl } from '@zyweb/shared/ui/base';
import { CreateParameterFormDataProvider } from './create-parameter-form-data.provider';

@Injectable()
export class CreateParameterFormFactory {

  constructor(private readonly _fb: FormBuilder,
              private _formDataProvider: CreateParameterFormDataProvider
  ) {
  }

  create(): CreateParameterForm {
    const formGroup = this.createFormGroup();
    return new CreateParameterForm(formGroup);
  }

  private createFormGroup() {
    return this._fb.group({
      zczbzl: [], //整车装备质量
      zdzzzl: [],   //最大装载质量
      rylx: [],   //燃油类型
      pjyh: [],   //平均油耗
      edgl: [],   //额定功率
      zdnj: [],   //最大扭矩
      zxzwbj: [],   //最小转弯半径
      zgcs: []   //最高车速

    });
  }
}
