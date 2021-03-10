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
import { DetailComponent } from '../../../../../../use-state/main/src/lib/containers/detail/detail.component';

@Component({
  selector: 'zyweb-vehicle-use-type-detail-button',
  templateUrl: './vehicle-use-type-detail-button.component.html',
  styleUrls: ['./vehicle-use-type-detail-button.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleUseTypeDetailButtonComponent  implements OnInit {
  @Input()
  updateCommand: DetailComponent;

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      // {label: '修改', icon: 'pi pi-refresh', command: () => {
      //     this.editOther();
      //   }},
      {separator:true},
      {label: '用途变更', icon: 'pi pi-times', command: () => {
          this.changeName();
        }},
    ];
  }

  public change(): void {
    this.updateCommand.update();
  }

  public changeName(): void {
    this.updateCommand.updateName();
  }
}

