import {Component, Input} from '@angular/core';
import {InfoBoxEnum} from "../../enums/infoBox.enum";

@Component({
  selector: 'info-box[textStyle][header]',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent {
  @Input() textStyle: InfoBoxEnum = InfoBoxEnum.center
  @Input('header') header: string | null
}
