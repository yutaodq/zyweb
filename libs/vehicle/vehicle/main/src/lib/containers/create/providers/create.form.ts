import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { SpartacusFormService } from '@zyweb/shared/ui/common';

export class CreateForm  {
  readonly initialValue;

  constructor(private _informationFormGroup: FormGroup,
              private _structureFormGroup: FormGroup,
              private _parameterFormGroup: FormGroup,
              private _specialFormGroup: FormGroup
              ) {
// console.log("CreateInformationFormCreateInformationFormCreateInformationForm")
//     this.initialValue = formGroup.value;
  }

  get informationFormGroup() {
    return this._informationFormGroup;
  }
  get structureFormGroup() {
    return this._structureFormGroup;
  }
  get parameterFormGroup() {
    return this._parameterFormGroup;
  }
  get specialFormGroup() {
    return this._specialFormGroup;
  }

  resetInformation() {
    this._informationFormGroup.reset();
  }
  resetStructure() {
    this._structureFormGroup.reset();
  }
  resetParameter() {
    this._parameterFormGroup.reset();
  }
  resetSpecial() {
    this._specialFormGroup.reset();
  }

  // ageIsGreaterThan(min: number): Observable<boolean> {
  //   return this.formGroup.valueChanges.pipe(
  //     map(value => value.age),
  //     distinctUntilChanged(),
  //     map(it => it > min),
  //     startWith(false)
  //   );
  // }
  //
  // isValid(): Observable<boolean> {
  //   return this.formGroup.statusChanges.pipe(
  //     map(() => this.formGroup.valid),
  //     startWith(false)
  //   );
  // }
  //

}
