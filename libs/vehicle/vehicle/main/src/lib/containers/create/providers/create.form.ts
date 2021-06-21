import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { SpartacusFormService } from '@zyweb/shared/ui/common';

export class CreateForm  {
  private readonly _informationInitialValue;
  private readonly _structureInitialValue;
  private readonly _parameterInitialValue;
  private readonly _specialInitialValue;

  constructor(private _informationFormGroup: FormGroup,
              private _structureFormGroup: FormGroup,
              private _parameterFormGroup: FormGroup,
              private _specialFormGroup: FormGroup
              ) {
// console.log("CreateInformationFormCreateInformationFormCreateInformationForm")
    this._informationInitialValue = _informationFormGroup.value;
    this._structureInitialValue = _structureFormGroup.value;
    this._parameterInitialValue = _parameterFormGroup.value;
    this._specialInitialValue = _specialFormGroup.value;
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
    this._informationFormGroup.reset(this._informationInitialValue);
  }
  resetStructure() {
    this._structureFormGroup.reset(this._structureInitialValue);
  }
  resetParameter() {
    this._parameterFormGroup.reset(this._parameterInitialValue);
  }
  resetSpecial() {
    this._specialFormGroup.reset(this._specialInitialValue);
  }
  isInformationValid(): Observable<boolean> {
    return this._informationFormGroup.statusChanges.pipe(
      map(() => this._informationFormGroup.valid),
      startWith(false)
    );
  }
  isStructureValid(): Observable<boolean> {
    return this._structureFormGroup.statusChanges.pipe(
      map(() => this._structureFormGroup.valid),
      startWith(false)
    );
  }
  isParameterValid(): Observable<boolean> {
    return this._parameterFormGroup.statusChanges.pipe(
      map(() => this._parameterFormGroup.valid),
      startWith(false)
    );
  }
  isSpecialValid(): Observable<boolean> {
    return this._specialFormGroup.statusChanges.pipe(
      map(() => this._specialFormGroup.valid),
      startWith(false)
    );
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
  //

}
