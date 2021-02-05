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
  selector: 'zyweb-vehicle-use-type-update-button',
  templateUrl: './vehicle-use-type-update-button.component.html',
  styleUrls: ['./vehicle-use-type-update-button.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleUseTypeUpdateButtonComponent  implements OnInit {
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
    console.log("aaaaaaaaaaaaaaaaaaaaa");
    this.onChangeUseTypeEvent.emit();
  }

  public editOther(): void {
    console.log("bbbbbbbbbbbbbbbbbbbbbb");
    this.onEditOtherEvent.emit();
  }
}

