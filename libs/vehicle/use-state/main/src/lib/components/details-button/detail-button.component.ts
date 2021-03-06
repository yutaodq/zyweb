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
import { MenuItem } from 'primeng/api';
import { DetailComponent } from '../../containers/detail/detail.component';

@Component({
  selector: 'zyweb-vehicle-use-state-detail-button',
  templateUrl: './detail-button.component.html',
  styleUrls: ['./detail-button.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DetailButtonComponent  implements OnInit {
  @Input()
  updateCommand: DetailComponent;

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      // {label: '修改', icon: 'pi pi-refresh', command: () => {
      //     this.editOther();
      //   }},
      {separator:true},
      {label: '改变车辆使用状态', icon: 'pi pi-times', command: () => {
          this.changeVehicleZt();
        }},
    ];
  }

  public change(): void {
    // this.updateCommand.update();
  }

  public changeVehicleZt(): void {
    // this.updateCommand.updateZt();
  }
}

