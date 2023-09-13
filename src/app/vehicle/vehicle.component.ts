import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  public vehicle:any = []

  constructor(private _vehicleService:VehicleService,private router:Router){
    _vehicleService.getvehicle().subscribe(
    (data:any)=>{
      this.vehicle = data;
    },

    (err:any)=>{
      alert("internal serve error");
    }

    )
  }
  view(id:number){
    this.router.navigateByUrl('dashboard/vehicledetails/+id');
  }
  edit (id:any){
    this.router.navigateByUrl('dashboard/vehicledetails/+id');
  }
}
