import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthorsModel} from "../model/models/authors.model";
import {IAuthorInterface} from "../interfaces/author.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorService implements IAuthorInterface {

  constructor(private http: HttpClient) {
  }

  add(authorModel: AuthorsModel): Observable<AuthorsModel> {
    return this.http.post<AuthorsModel>('http://localhost:8081/author/register', authorModel)
  }

  delete(id: number): Observable<AuthorsModel> {
    return this.http.delete<AuthorsModel>(`http://localhost:8081/author/delete/${id}`);
  }

  getList(): Observable<AuthorsModel[]> {
    return this.http.get<AuthorsModel[]>('http://localhost:8081/author/getList');
  }

  get(id: number): Observable<AuthorsModel> {
    return this.http.get<AuthorsModel>(`http://localhost:8081/author/get/${id}`);
  }

  test(): Observable<AuthorsModel> {
    return this.http.patch<AuthorsModel>(`http://localhost:8081/author/update`, {
      "id": 1,
      "email": "q",
      "firstname": "ashkan",
      "university": "tehran",
      "lastname": "fotohi",
      "isAlive": true,
      "updatedAt": "2023-10-13T14:31:14.347486",
      "createdAt": null

    }, {});
  }

}
