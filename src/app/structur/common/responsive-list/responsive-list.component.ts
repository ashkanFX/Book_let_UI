import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthorsModel} from "../../model/models/authors.model";
import {IColInterface} from "../../service/interface/col.interface";
import {ListService} from "../../service/impl/list.service";

@Component({
  selector: 'responsive-list',
  templateUrl: './responsive-list.component.html',
  styles: [``]
})


export class ResponsiveListComponent<TData> implements OnInit {
  constructor(private list: ListService) {}

  @Input() rowData: TData[] = [];
  @Input() rest: string = '';
  @Input() col: IColInterface[] = [];
  authors: AuthorsModel[] = []

  ngOnInit(): void {
    this.list.getList<TData>(this.rest).subscribe( (res)=>{
      console.log(res);

    } )
  }

}
