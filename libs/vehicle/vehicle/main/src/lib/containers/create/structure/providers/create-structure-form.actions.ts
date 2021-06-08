import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { CreateStructureForm } from './create-structure.form';
import { Vehicle, VehicleInformation, VehicleStructure } from '@zyweb/shared/data-access/model/lvms';
import { CreateVehicleService } from '../../../../services';

@Injectable()
export class CreateStructureFormActions implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];

  resetButtonClicked = new Subject<void>();
  cancelButtonClicked = new Subject<void>();
  createStructureFormNextClicked = new Subject<void>();

  createStructureFormPreviousClicked = new Subject<void>();

  constructor(
    private _createService: CreateVehicleService,
    private _form: CreateStructureForm
  ) {
    this.registerEvents();

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Registers events
   */
  private registerEvents(): void {
    this._subscriptions.push(

    this.createStructureFormPreviousClicked
      .subscribe(() => this.creatreStructureFormPrevious()
      ),

      this.createStructureFormNextClicked
        .subscribe(() => this.creatreStructureFormNext()
        ),

      this.resetButtonClicked
        .subscribe(() => this._form.reset()
        ),

      this.cancelButtonClicked
        .subscribe(() => this._createService.cancel()
        )
    );
  }

  private creatreStructureFormNext() {
    const vehicleStructure = this._form.asFormGroup.value as VehicleStructure;
    this._createService.createStructureFormNext(vehicleStructure);
  }

  private creatreStructureFormPrevious() {
    this._createService.createStructureFormPrevious();

  }
}
