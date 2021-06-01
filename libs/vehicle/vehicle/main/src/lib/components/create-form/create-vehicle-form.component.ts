import {
  Component,
  Input,
} from '@angular/core';

import { FormGroup } from '@angular/forms';
import { VehicleCreateFormDataProvider } from '../../containers/create/providers';


@Component({
  selector: 'zyweb-vehicle-create-vehicle-form',
  templateUrl: './create-vehicle-form.component.html',
  styleUrls: []
})


export class CreateVehicleForm {

  @Input()
  form: FormGroup;

  constructor(
    public formDataProvider: VehicleCreateFormDataProvider,
  ) {
  }


}

