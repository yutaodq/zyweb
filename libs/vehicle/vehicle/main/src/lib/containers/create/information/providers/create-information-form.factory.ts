import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateInformationForm } from './create-information.form';
import { BaseFormControl } from '@zyweb/shared/ui/base';
import { CreateInformationFormDataProvider } from './create-information-form-data.provider';

@Injectable()
export class CreateInformationFormFactory {

  constructor(private readonly _fb: FormBuilder,
              private _formDataProvider: CreateInformationFormDataProvider
  ) {
  }

  create(): CreateInformationForm {
    const formGroup = this.createFormGroup();
    return new CreateInformationForm(formGroup);
  }

  private createFormGroup() {
    return this._fb.group({
      pz: ['牌照号：123456', [], [this._formDataProvider.isPzExists()]],
      nbpz: ['内部牌照123', [Validators.required]],
      name: ['车辆名称'],
      ggxh: ['规格型号'],
      sccj: ['生产厂家'],
      ccrq: [null],
      tcrq: [null],
      yz: [123],
      csys: ['车身颜色'],
      fdjxh: ['发动机型号'],
      fdjbh: ['发动机编号'],
      dpxh: ['底盘型号'],
      dpbh: ['底盘编号'],
      description: ['备注']
    });

    // return this.formBuilder.group({
    //   pz: BaseFormControl.create('牌照号：123456', '牌照',[], []),
    //   nbpz: BaseFormControl.create('内部牌照123', '内部牌照', [Validators.required]),
    //   name: [{value: null, disabled: true}],
    //   ggxh: [''],
    //   age: [''],
    //   country: ['']
    // });
  }
}
