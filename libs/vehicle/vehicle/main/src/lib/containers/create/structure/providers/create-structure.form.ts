import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';

export class CreateStructureForm  {
  readonly initialValue;

  constructor(private formGroup: FormGroup) {
    this.initialValue = formGroup.value;
  }

  get asFormGroup() {
    return this.formGroup;
  }

  isValid(): Observable<boolean> {
    return this.formGroup.statusChanges.pipe(
      map(() => this.formGroup.valid),
      startWith(false)
    );
  }

  reset() {
    this.formGroup.reset();
  }

}
