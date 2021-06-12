import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { CreateInformationForm } from './create-information.form';
import { CreateVehicleService } from '../../../../services';
import { Vehicle, VehicleInformation } from '@zyweb/shared/data-access/model/lvms';

@Injectable()
export class CreateInformationFormActions implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];

  resetButtonClicked = new Subject<void>();
  cancelButtonClicked = new Subject<void>();
  creatreInformationFormNextClicked = new Subject<void>();

  constructor(
    private _createService: CreateVehicleService,
    private _form: CreateInformationForm
  ) {
    this.registerEvents();

  }

  ngOnInit() {
    // this.registerEvents();
  }

  ngOnDestroy() {
    this._subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Registers events
   */
  private registerEvents(): void {
    this._subscriptions.push(
       this.creatreInformationFormNextClicked
        .subscribe(() => this.creatreInformationFormNext()
        ),
      this.resetButtonClicked
        .subscribe(() => this._form.reset()
        ),

      this.cancelButtonClicked
        .subscribe(() => this._createService.cancel()
        )
    );
  }

  private creatreInformationFormNext() {
    const vehicleInformation = this._form.asFormGroup.value as VehicleInformation;
    this._createService.createInformationFormNext(vehicleInformation);
  }

  private save() {
    this._createService.add(this._form.asFormGroup.value);
  }
}
