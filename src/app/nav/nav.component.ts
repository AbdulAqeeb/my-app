import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
public cartcount:number = 0;

constructor(private commonService:CommonService){

  commonService.getValue().subscribe(
    (data:any)=>{
      this.cartcount = data;
    } 
  )
}
}
