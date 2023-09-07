import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _httpClient:HttpClient) { }
  getAccount():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }
  createaccount(data:any):Observable<any>{
   return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)
  }
}
