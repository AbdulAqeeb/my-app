import { Component } from '@angular/core';
import { PracticeService } from '../practice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})

export class PracticeComponent {

  public practice:any = [];

  constructor(private _practiceService:PracticeService){
 _practiceService.getpractice().subscribe(
  (data:any)=>{
    this.practice = data.entries;
  },
  (err:any)=>{
    alert("internal server error");
  }
 )

  }
 }
  


