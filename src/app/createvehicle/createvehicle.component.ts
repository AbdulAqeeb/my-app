import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {
  public vehicleform: FormGroup = new FormGroup({

    vehicle : new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    
  });
  
  constructor(private vehicleservice:VehicleService){}

  submit(){
    console.log(this.vehicleform)

    this.vehicleservice.createVehicle(this.vehicleform.value).subscribe(
      (data:any)=>{
        alert("vehicle created successfully");
      },
      (err:any)=>{
        alert("vehicle creation failed");
      }
    )
  }
}
