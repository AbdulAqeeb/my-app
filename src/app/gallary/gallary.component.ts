import { Component } from '@angular/core';
import { GallaryService } from '../gallary.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent {
  
 public gallary:any = [];

 constructor(private _gallaryService:GallaryService){
  _gallaryService.getgallary().subscribe(
    (data:any)=>{
      this.gallary = data.data.memes;
    },
    (err:any)=>{
    alert("internal service error")
    }
  )

 }
  
  
  
  
  }
