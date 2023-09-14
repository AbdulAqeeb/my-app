import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
public wishlist:number = 0;

constructor(private commonService:CommonService){

  commonService.getValue().subscribe(
    (data:any)=>{
      this.wishlist = data;
    }
  )
}
}
