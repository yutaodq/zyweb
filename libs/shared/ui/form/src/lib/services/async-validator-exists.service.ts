import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { FindByNameApi } from '@zyweb/shared/data-access/api/lvms';
import { FORMLY_UNIQUE_NAME } from '../formly-const';

@Injectable({
  providedIn: 'root',
})
export class AsyncValidatorExistsService {
  public exists(api: FindByNameApi): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      const name = control.value;
      if (!name) {
        return of(null);
      }
      return this.findName(name, api);
    };
  }

  private findName(name: string, api: FindByNameApi): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return  api.findByName(name).pipe(
      first(),
      map(entity => entity.length === 1),
      map(valid => (!valid ? {FORMLY_UNIQUE_NAME: true} : null)),
    );
  }

}
