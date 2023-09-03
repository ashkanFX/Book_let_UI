import {Component} from '@angular/core';
import {IAuthorInterface} from "./structure/service/interface/author.interface";
import {IColInterface} from "./structure/service/interface/col.interface";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('fa');
  }
}
