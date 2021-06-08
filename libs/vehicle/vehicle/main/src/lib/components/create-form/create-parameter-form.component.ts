import {
  Component, Input
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'zyweb-vehicle-create-parameter-form',
  templateUrl: './create-parameter-form.component.html',
  styleUrls: []
})


export class CreateParameterFormComponent {
  @Input()
  form: FormGroup;

  constructor(
  ) {
  }


}

