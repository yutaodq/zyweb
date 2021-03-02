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
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { MenuItem } from 'primeng/api';
import { DetailComponent } from '../../containers/detail/detail.component';

@Component({
  selector: 'zyweb-vehicle-detail-button',
  templateUrl: './vehicle-detail-button.component.html',
  styleUrls: ['./vehicle-detail-button.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleDetailButtonComponent  implements OnInit {
  @Input()
  updateCommand: DetailComponent;
  @Output()
  public onChangeUseTypeEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  public onEditOtherEvent: EventEmitter<any> = new EventEmitter();

  items: MenuItem[];

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
    this.updateCommand.update();
    this.onEditOtherEvent.emit();
  }
}

