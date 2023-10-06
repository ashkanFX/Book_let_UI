import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthorsModel} from "../../model/models/authors.model";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http : HttpClient) { }
   add(authorModel : AuthorsModel){
    return this.http.post('http://localhost:8081/author/register',authorModel)
   }
}
