import {Component, inject, Input} from '@angular/core';
import {IAuthorInterface} from "../../../interfaces/author.interface";
import {IColInterface} from "../../../interfaces/col.interface";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  private route = inject(ActivatedRoute);
  id$ = this.route.data.pipe(map((data) => data['title']));
  @Input() data?: { title: string }; // this will come from the resolved data

  constructor(private translate: TranslateService) {
    this.id$.subscribe(id =>{
      console.log(id);
    })
  }

  row: IAuthorInterface[] = []
  cols: IColInterface[] = [
    {field: 'firstName', header: this.translate.instant('firstName')},
    {field: 'lastname', header: this.translate.instant('lastName')},
    {field: 'email', header: this.translate.instant('email')},
    {field: 'university', header: this.translate.instant('university')},
    {field: 'isAlive', header: this.translate.instant('isAlive')},
    {field: '', header: this.translate.instant('operation')}
  ];
}
