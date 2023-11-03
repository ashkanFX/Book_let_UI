import {AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input} from '@angular/core';
import {InfoBoxEnum} from "../../enums/infoBox.enum";

@Component({
  // [textStyle][header] for make these two required to pass
  selector: 'info-box[textStyle]',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements AfterViewInit  {
  @Input() textStyle: InfoBoxEnum = InfoBoxEnum.center;
  @Input('header') header: string | null;
  @ContentChild('text') text: ElementRef;
  // private _message: string = '';
  //
  // @Input()
  // set message(value: string) {
  //
  // }
  // get reversedMessage(): string {
  //
  // }

  ngAfterViewInit(): void {
    console.log(this.text.nativeElement.innerHTML.length)
    if (this.text.nativeElement.innerHTML.length >= 500) {
      this.text.nativeElement.innerHTML = this.text.nativeElement.innerHTML.substring(0, 450)
    }
  }


}
