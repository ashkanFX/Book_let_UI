import { Component } from '@angular/core';
import {IAuthorInterface} from "./structur/service/interface/author.interface";
import {IColInterface} from "./structur/service/interface/col.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }
  row :IAuthorInterface[] = []
  cols : IColInterface[] = [
    { field: 'firstName', header: 'firstName' },
    { field: 'lastname', header: 'lastname' },
    { field: 'email', header: 'email' },
    { field: 'university', header: 'university' },
    { field: 'isAlive', header: 'isAlive' }
  ];
 }
