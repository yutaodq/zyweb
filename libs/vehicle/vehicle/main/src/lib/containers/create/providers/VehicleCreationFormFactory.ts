
import { Injectable } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { VehicleCreationForm } from "./VehicleCreationForm";

@Injectable()
export class VehicleCreationFormFactory {
  constructor(private formBuilder: FormBuilder) {}

  create(): VehicleCreationForm {
    const formGroup = this.createFormGroup();
    return new VehicleCreationForm(formGroup);
  }

  private createFormGroup() {
    return this.formBuilder.group({
      name: [""],
      age: [""],
      country: [""]
    });
  }
}
