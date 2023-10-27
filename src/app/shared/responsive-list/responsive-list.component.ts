import {Component, Input, OnInit} from '@angular/core';
import {AuthorsModel} from "../../model/models/authors.model";
import {IColInterface} from "../../interfaces/col.interface";
import {ListService} from "../../service/list.service";

@Component({
  selector: 'responsive-list',
  templateUrl: './responsive-list.component.html',
  styles: [``]
})


export class ResponsiveListComponent<TData> implements OnInit {
  constructor(private list: ListService) {
  }
  visible: boolean = false;

  @Input() rowData: any[];
  @Input() rest: string = '';
  @Input() col: IColInterface[] = [];
  authors: AuthorsModel[] = []

  ngOnInit(): void {


    this.list.getList<any>(this.rest).subscribe((res) => {
        this.rowData = res
        }
    )
  }


}
