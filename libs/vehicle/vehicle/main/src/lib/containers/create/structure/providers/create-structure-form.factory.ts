import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateStructureForm } from './create-structure.form';
import { BaseFormControl } from '@zyweb/shared/ui/base';
import { CreateStructureFormDataProvider } from './create-structure-form-data.provider';

@Injectable()
export class CreateStructureFormFactory {

  constructor(private readonly _fb: FormBuilder,
              private _formDataProvider: CreateStructureFormDataProvider
  ) {
  }

  create(): CreateStructureForm {
    const formGroup = this.createFormGroup();
    return new CreateStructureForm(formGroup);
  }

  private createFormGroup() {
    return this._fb.group({
      cc: [],  //车长
      ck: [],  //车宽
      cg: [],  //车高
      zj: [],  //轴距
      qlj: [],  //前轮距
      hlj: [],  //后轮距
      qdxs: [],  //驱动形式
      fxpwz: [],  //方向盘位置
      bsqxs: []  //变数器形式
    });

  }
}
