import {Observable} from "rxjs";
import {AuthorsModel} from "../model/models/authors.model";

export interface IAuthorInterface {
  add(authorModel: AuthorsModel): Observable<AuthorsModel>

  delete(id: number): Observable<AuthorsModel>

  getList(): Observable<AuthorsModel[]>

  get(id: number): Observable<AuthorsModel>

}
