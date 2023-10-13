import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http :HttpClient) { }
  getList<T>(rest :string){
    return this.http.get<T[]>(rest,{})
  }
}
