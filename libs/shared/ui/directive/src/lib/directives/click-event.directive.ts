import { Directive, Input, HostListener } from "@angular/core";
import { Subject } from "rxjs";

@Directive({
  selector: "[zywebClickEvent]"
})
export class ClickEventDirective {
  @Input('zywebClickEvent') clickEvent: Subject<void>;

  @HostListener("click") onClick() {
    this.clickEvent.next();
  }
}
