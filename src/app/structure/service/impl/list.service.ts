import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthorsModel} from "../../model/models/authors.model";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http :HttpClient) { }
  getList<T>(rest :string){
    return this.http.get<T[]>(rest,{})
  }

  add<T>(item: AuthorsModel) {
    return /*this.http.get<T>(item, {})*/
  }
}
