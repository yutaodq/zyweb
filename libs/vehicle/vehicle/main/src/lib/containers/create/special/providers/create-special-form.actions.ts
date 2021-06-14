import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { CreateSpecialForm } from './create-special.form';
import { CreateVehicleService } from '../../../../services';
import { Vehicle, VehicleSpecial, VehicleStructure } from '@zyweb/shared/data-access/model/lvms';

@Injectable()
export class CreateSpecialFormActions implements OnDestroy {
  private _subscriptions: Array<Subscription> = [];

  resetButtonClicked = new Subject<void>();
  cancelButtonClicked = new Subject<void>();
  createSpecialFormNextClicked = new Subject<void>();
  createSpecialFormPreviousClicked = new Subject<void>();

  constructor(
    private _createService: CreateVehicleService,
    private _form: CreateSpecialForm
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
      this.createSpecialFormPreviousClicked
        .subscribe(() => this.creatreSpecialFormPrevious()
        ),

      this.createSpecialFormNextClicked
        .subscribe(() => this.creatreSpecialFormNext()
        ),

      this.resetButtonClicked
        .subscribe(() => this._form.reset()
        ),

      this.cancelButtonClicked
        .subscribe(() => this._createService.cancel()
        )
    );
  }

  private creatreSpecialFormNext() {
    // const vehicleSpecial = this._form.asFormGroup.value as VehicleSpecial;
    this._createService.createSpecialFormNext(this.getSpecial());
  }
  private getSpecial() {
    return this._form.asFormGroup.value as VehicleSpecial;
  }

  private creatreSpecialFormPrevious() {
    this._createService.createSpecialFormPrevious(this.getSpecial());

  }
}
