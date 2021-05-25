import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VehicleCreateForm } from './VehicleCreateForm';
import { BaseFormControl } from '@zyweb/shared/ui/base';
import { VehicleCreateFormDataProvider } from './VehicleCreateFormDataProvider';

@Injectable()
export class VehicleCreateFormFactory {

  constructor(private _fb: FormBuilder,
              private _formDataProvider: VehicleCreateFormDataProvider
  ) {
  }

  create(): VehicleCreateForm {
    const formGroup = this.createFormGroup();
    return new VehicleCreateForm(formGroup);
  }

  private createFormGroup() {
    return this._fb.group({
      pz: ['牌照号：123456', [], [this._formDataProvider.isPzExists()]],
      nbpz: ['内部牌照123', [Validators.required]],
      name: [''],
      ggxh: [''],
      age: [''],
      country: ['{ value: null, disabled: true }']
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
