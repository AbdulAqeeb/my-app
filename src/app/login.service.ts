import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  login(data:any):Observable<any>{
    return this.httpClient.post("https://reqres.in/api/login",data)
  }
}
