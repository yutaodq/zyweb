
import { Injectable } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { VehicleCreateForm } from "./VehicleCreateForm";

@Injectable()
export class VehicleCreateFormFactory {
  constructor(private formBuilder: FormBuilder) {}

  create(): VehicleCreateForm {
    const formGroup = this.createFormGroup();
    return new VehicleCreateForm(formGroup);
  }

  private createFormGroup() {
    return this.formBuilder.group({
      pz: [""],
      nbpz: [""],
      name: [""],
      ggxh: [""],
      age: [""],
      country: [""]
    });
  }
}
