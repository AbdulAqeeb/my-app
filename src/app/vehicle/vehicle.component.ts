import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  public vehicle:any = []

  constructor(private _vehicleService:VehicleService){
    _vehicleService.getvehicle().subscribe(
    (data:any)=>{
      this.vehicle = data;
    },

    (err:any)=>{
      alert("internal serve error");
    }

    )
  }

}
