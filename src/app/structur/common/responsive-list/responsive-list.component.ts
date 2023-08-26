import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthorsModel} from "../models/authors.model";

@Component({
  selector: 'app-responsive-list',
  templateUrl: './responsive-list.component.html',
  styles: [`


  `]
})
export class ResponsiveListComponent implements OnInit, OnChanges{
  authors : AuthorsModel[] = [
    {firstName: 'mehrshad', lastname: 'mehrayin', email: 'mehrshadmehrayin@gmail.com', university: 'azad terhan gharb', isAlive: true},
    {firstName: 'ashkan', lastname: 'fotohi', email: 'ashkanfotohi@gmail.com', university: 'azad tehran shargh', isAlive: true},
    {firstName: 'abolfazl', lastname: 'shojaat', email: 'mehrshadmehrayin@gmail.com', university: 'bo ali hamedan', isAlive: true},
    {firstName: 'amir', lastname: 'bagheri', email: 'amirbagheri@gmail.com', university: 'azad tehran gharb', isAlive: true},
    {firstName: 'abolfazl', lastname: 'gholami', email: 'mehrshadmehrayin@gmail.com', university: 'sharif', isAlive: false}
  ]
  cols: any;

  ngOnInit(): void {
    this.cols = [
      { field: 'firstName', header: 'firstName' },
      { field: 'lastname', header: 'lastname' },
      { field: 'email', header: 'email' },
      { field: 'university', header: 'university' },
      { field: 'isAlive', header: 'isAlive' }
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
