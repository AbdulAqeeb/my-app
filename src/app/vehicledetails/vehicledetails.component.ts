import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.css']
})
export class VehicledetailsComponent {
public vehicle:any = {};
public id:any = {};
constructor(private activatedRoute:ActivatedRoute,private vehicleService: VehicleService){
  activatedRoute.params.subscribe(
    (data:any)=>{
    

     vehicleService.getvehicleDetails(this.id).subscribe(
      (data:any)=>{
        this.vehicle = data;
      }
     )
    }
  )
}

}
