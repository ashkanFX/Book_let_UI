import {Component, OnInit} from '@angular/core';
import {AuthorService} from "../../../../service/impl/author.service";
import {AuthorsModel} from "../../../../model/models/authors.model";

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private authorService: AuthorService) {
  }
  customers : AuthorsModel[]
  ngOnInit(): void {
    this.authorService.getList().subscribe((response) => {
      this.customers = response
      console.table(response)
    })
  }

}
