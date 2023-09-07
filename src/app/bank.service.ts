import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  
  public balance:number = 1000;


  constructor() { }
}
