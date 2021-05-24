import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { SpartacusFormService } from '@zyweb/shared/ui/common';

export class VehicleCreateForm extends SpartacusFormService<Vehicle> {
  readonly initialValue;

  // constructor(private formGroup: FormGroup) {
  //   this.initialValue = formGroup.value;
  // }

  // get asFormGroup() {
  //   return this.formGroup;
  // }

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

  // reset() {
  //   this.formGroup.reset();
  // }

  protected build() {
    const form = new FormGroup({});

    form.setControl(
      'pz',
      new FormControl('', [
        Validators.required
      ])
    );
    form.setControl(
      'nbpz',
      new FormControl('', [
        Validators.required
      ])
    );

    form.setControl('name', new FormControl(''));
    form.setControl('ggxh', new FormControl(''));

    // form.setControl(
    //   'ggxh',
    //   new FormGroup({
    //     uid: new FormControl(undefined, Validators.required),
    //   })
    // );

    this.form = form;

  }
}
