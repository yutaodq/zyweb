import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { ExistsByNameApi } from '@zyweb/shared/data-access/api/lvms';
import { FORMLY_UNIQUE_NAME } from '../formly-const';

@Injectable({
  providedIn: 'root'
})
export class AsyncValidatorNameExistsService {
  public exists(api: ExistsByNameApi): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null>
      | Observable<ValidationErrors | null> => {
      const name = control.value;
      if (!name) {
        return of(null);
      }
      return this.isNameExists(name, api);
    };
  }

  private isNameExists(name: string, api: ExistsByNameApi): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return api.existsByName(name).pipe(
      map(valid => (!valid ? { FORMLY_UNIQUE_NAME: true } : null))
    );
  }

}
