import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { CreateStructureForm } from './create-structure.form';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { CreateVehicleService } from '../../../../services';

@Injectable()
export class CreateStructureFormActions implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];

  resetButtonClicked = new Subject<void>();
  cancelButtonClicked = new Subject<void>();
  creatreStructureFormNextClicked = new Subject<void>();

  creatreStructureFormPreviousClicked = new Subject<void>();

  constructor(
    private _createService: CreateVehicleService,
    private _form: CreateStructureForm
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

    this.creatreStructureFormPreviousClicked
      .subscribe(() => this.creatreStructureFormPrevious()
      ),

      this.creatreStructureFormNextClicked
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
    const vehicle = this._form.asFormGroup.value as Vehicle;
    this._createService.createInformationFormNext(vehicle);
  }

  private creatreStructureFormPrevious() {
    this._createService.creatreStructureFormPrevious();

  }
}
