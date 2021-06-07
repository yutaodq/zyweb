import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Observable,  } from 'rxjs';
import { CreateVehicleService } from '../../../services';
import { CreateStructureForm,
  CreateStructureFormActions,
  CreateStructureFormDataProvider
} from './providers';

/*
https://github.com/vladeye/druo-dashboard-app/tree/master/src/app/content/pages
D:\学习案例\druo-dashboard\src\app\content\pages\components\invoices\invoices-routing.module.ts
 */
@Component({
  selector: 'zyweb-vehicle-create-structure',
  templateUrl: './create-structure.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CreateStructureComponent  implements OnInit  {

  formIsValid: Observable<boolean>;

  constructor(
    private _createService: CreateVehicleService,
    public form: CreateStructureForm,
    public formDataProvider: CreateStructureFormDataProvider,
    public formActions: CreateStructureFormActions
  ) {
    this.formIsValid = this.form.isValid();
  }

  ngOnInit(): void {

  }


}
