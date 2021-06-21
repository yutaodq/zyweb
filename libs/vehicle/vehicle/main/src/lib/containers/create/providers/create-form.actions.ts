import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { CreateForm } from './create.form';
import {
  Vehicle,
  VehicleInformation,
  VehicleParameter,
  VehicleSpecial,
  VehicleStructure
} from '@zyweb/shared/data-access/model/lvms';
import { CreateVehicleService } from '../../../services';

@Injectable()
export class CreateFormActions implements OnDestroy {
  private _subscriptions: Array<Subscription> = [];

  resetInformationButtonClicked = new Subject<void>();
  cancelButtonClicked = new Subject<void>();
  informationFormNextClicked = new Subject<void>();

  resetStructureButtonClicked = new Subject<void>();
  structureFormNextClicked = new Subject<void>();
  structureFormPreviousClicked = new Subject<void>();

  resetParameterButtonClicked = new Subject<void>();
  parameterFormNextClicked = new Subject<void>();
  parameterFormPreviousClicked = new Subject<void>();

  resetSpecialButtonClicked = new Subject<void>();
  specialFormNextClicked = new Subject<void>();
  specialFormPreviousClicked = new Subject<void>();

  constructor(
    private _createService: CreateVehicleService,
    private _form: CreateForm
  ) {
    this.registerEvents();

  }

  ngOnDestroy() {
    this._subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Registers events
   */
  private registerEvents(): void {
    this._subscriptions.push(
       this.informationFormNextClicked
        .subscribe(() => this.creatreInformationFormNext()
        ),
      this.resetInformationButtonClicked
        .subscribe(() => this._form.resetInformation()
        ),

      this.cancelButtonClicked
        .subscribe(() => this._createService.cancel()
        ),

      this.structureFormPreviousClicked
        .subscribe(() => this.creatreStructureFormPrevious()
        ),

      this.structureFormNextClicked
        .subscribe(() => this.creatreStructureFormNext()
        ),

      this.resetStructureButtonClicked
        .subscribe(() => this._form.resetStructure()
        ),

      this.parameterFormPreviousClicked
        .subscribe(() => this.creatreParameterFormPrevious()
        ),

      this.parameterFormNextClicked
        .subscribe(() => this.creatreParameterFormNext()
        ),
      this.resetParameterButtonClicked
        .subscribe(() => this._form.resetParameter()
        ),

      this.specialFormPreviousClicked
        .subscribe(() => this.creatreSpecialFormPrevious()
        ),

      this.specialFormNextClicked
        .subscribe(() => this.creatreSpecialFormNext()
        ),

      this.resetSpecialButtonClicked
        .subscribe(() => this._form.resetSpecial()
        ),

    );
  }

  private creatreInformationFormNext() {
    const vehicleInformation = this._form.informationFormGroup.value as VehicleInformation;
    this._createService.createInformationFormNext(vehicleInformation);
  }
  private creatreStructureFormNext() {
    this._createService.createStructureFormNext(this.getStructure());
  }
  private getStructure() {
    return this._form.structureFormGroup.value as VehicleStructure;
  }

  private creatreStructureFormPrevious() {
    this._createService.createStructureFormPrevious(this.getStructure());

  }

  private creatreParameterFormNext() {
    this._createService.createParameterFormNext(this.getParameter());
  }
  private getParameter() {
    return this._form.parameterFormGroup.value as VehicleParameter;
  }

  private creatreParameterFormPrevious() {
    this._createService.createParameterFormPrevious(this.getParameter());

  }
  private creatreSpecialFormNext() {
    // const vehicleSpecial = this._form.asFormGroup.value as VehicleSpecial;
    this._createService.createSpecialFormNext(this.getSpecial());
  }
  private getSpecial() {
    return this._form.specialFormGroup.value as VehicleSpecial;
  }

  private creatreSpecialFormPrevious() {
    this._createService.createSpecialFormPrevious(this.getSpecial());

  }

}
