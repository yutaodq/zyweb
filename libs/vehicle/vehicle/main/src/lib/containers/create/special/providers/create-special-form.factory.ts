import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateSpecialForm } from './create-special.form';
import { BaseFormControl } from '@zyweb/shared/ui/base';
import { CreateSpecialFormDataProvider } from './create-special-form-data.provider';

@Injectable()
export class CreateSpecialFormFactory {

  constructor(private readonly _fb: FormBuilder,
              private _formDataProvider: CreateSpecialFormDataProvider
  ) {
  }

  create(): CreateSpecialForm {
    const formGroup = this.createFormGroup();
    return new CreateSpecialForm(formGroup);
  }

  private createFormGroup() {
    return this._fb.group({
      zdqzl: [],  //最大起重量
      gjbj: [],   //工作半径
      zb: [],   //主笔
      zbc: [],   //主臂长
      fbc: [],   //副臂长
      fdjxh: [],   //发动机型号
      edgl: [],   //额定功率
      zdnj: [],   //最大扭矩
      zgzs: [],   //最高转速
      rylx: [],   //燃油类型
      pjyh: [],   //平均油耗
      glxh: [],   //锅炉型号
      ysjxh: [],   //压缩机型号
      bxh: [],   //泵型号
      csyq: [],   //测试仪器
      dr: [],   //斗容
      bsqxs: []   //变数器形式

    });
  }
}
