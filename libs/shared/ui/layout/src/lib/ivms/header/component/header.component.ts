// import browser from 'browser-detect';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zyweb-shared-ui-layout-ivms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() logo;
  @Input() title;

  constructor() {
  }

  ngOnInit(): void {
  }

}
