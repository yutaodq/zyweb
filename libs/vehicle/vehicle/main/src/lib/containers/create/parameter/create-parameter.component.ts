import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Observable,  } from 'rxjs';
import { CreateVehicleService } from '../../../services';
import { CreateParameterForm, CreateParameterFormActions, CreateParameterFormDataProvider } from './providers';
import { CreateForm, CreateFormActions } from '../providers';

/*
https://github.com/vladeye/druo-dashboard-app/tree/master/src/app/content/pages
D:\学习案例\druo-dashboard\src\app\content\pages\components\invoices\invoices-routing.module.ts
 */
@Component({
  selector: 'zyweb-vehicle-create-parameter',
  templateUrl: './create-parameter.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CreateParameterComponent  implements OnInit  {

  formIsValid: Observable<boolean>;

  constructor(
    public form: CreateForm,
    public formActions: CreateFormActions,
  ) {
    // this.formIsValid = this.form.isValid();
  }

  ngOnInit(): void {

  }


}
