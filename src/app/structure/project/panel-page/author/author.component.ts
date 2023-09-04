import { Component } from '@angular/core';
import {IAuthorInterface} from "../../../service/interface/author.interface";
import {IColInterface} from "../../../service/interface/col.interface";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {

  constructor(private formBuilder : FormBuilder) {
  }

  row :  IAuthorInterface[] = []
  cols : IColInterface[] = [
    { field: 'firstName', header: 'firstName' },
    { field: 'lastname', header: 'lastname' },
    { field: 'email', header: 'email' },
    { field: 'university', header: 'university' },
    { field: 'isAlive', header: 'isAlive' }
  ];
}
