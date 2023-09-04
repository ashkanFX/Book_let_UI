import { Component } from '@angular/core';
import {IAuthorInterface} from "../../../service/interface/author.interface";
import {IColInterface} from "../../../service/interface/col.interface";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  constructor(private translate: TranslateService) {
  }
  row :  IAuthorInterface[] = []
  cols : IColInterface[] = [
    { field: 'firstName', header: this.translate.instant('firstName') },
    { field: 'lastname', header: this.translate.instant('lastName') },
    { field: 'email', header: this.translate.instant('email') },
    { field: 'university', header: this.translate.instant('university') },
    { field: 'isAlive', header: this.translate.instant('isAlive') }
  ];
}
