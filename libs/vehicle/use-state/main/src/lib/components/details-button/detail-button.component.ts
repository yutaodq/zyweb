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
      {label: '修改状态名称', icon: 'pi pi-times', command: () => {
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

