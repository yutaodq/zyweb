import {
  Component, Input
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'zyweb-vehicle-create-special-form',
  templateUrl: './create-special-form.component.html',
  styleUrls: []
})


export class CreateSpecialFormComponent {
  @Input()
  form: FormGroup;

  constructor(
  ) {
  }


}

