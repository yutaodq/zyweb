import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Injector,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';

@Component({
  selector: 'zyweb-use-state-vehicle-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DetailFormComponent  {
  @Input()   public vehicleUseState:        VehicleUseState;
  constructor() {
  }

}

