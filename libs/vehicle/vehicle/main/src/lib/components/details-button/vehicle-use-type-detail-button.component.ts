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
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'zyweb-vehicle-use-type-detail-button',
  templateUrl: './vehicle-use-type-detail-button.component.html',
  styleUrls: ['./vehicle-use-type-detail-button.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleUseTypeDetailButtonComponent  implements OnInit {
  items: MenuItem[];

  @Output()
  public onChangeUseTypeEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  public onEditOtherEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.items = [
      // {label: '修改', icon: 'pi pi-refresh', command: () => {
      //     this.editOther();
      //   }},
      {separator:true},
      {label: '用途变更', icon: 'pi pi-times', command: () => {
          this.changeUseType();
        }},
    ];
  }

  public changeUseType(): void {
    this.onChangeUseTypeEvent.emit();
  }

  public editOther(): void {
    this.onEditOtherEvent.emit();
  }
}

