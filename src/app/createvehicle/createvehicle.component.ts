import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {

  public id:any = [];

  public vehicleform: FormGroup = new FormGroup({

    vehicle: new FormControl(),
    manufacturer: new FormControl(),

    model: new FormGroup({
      type: new FormControl(),
      fuel: new FormControl(),
      color: new FormControl(),

    }),
    type: new FormControl(),
    busFee: new FormControl(),
    hostelFee: new FormControl(),
    cards:new FormArray([])
  });

  get cardsFormArray(){
    return this.vehicleform.get("cards")as FormArray;
  }
  constructor(private vehicleservice: VehicleService, private activatedRoute:ActivatedRoute) { 
    activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;

        this.vehicleservice.getvehicleDetails(this.id).subscribe(
          (data:any)=>{
            this.vehicleform.patchValue( data );
          }
        )
      }
    )
  }
  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        no: new FormControl(),
        exp: new FormControl(),
        cvv: new FormControl(),
      })
      
    )
  }

  deleteCard(i:number){
    this.cardsFormArray.removeAt(i);
  }
  submit() {
    console.log(this.vehicleform)
    if(this.id){
      // edit
      this.vehicleservice.updatevehicle(this.id,this.vehicleform).subscribe(
        (data:any)=>{
          alert("updated successfully");
        },
        (err:any)=>{
          alert("internal server error");
        }
      )
    }
    else{
      // create
      this.vehicleservice.createVehicle(this.vehicleform.value).subscribe(
        (data: any) => {
          alert("vehicle created successfully");
        },
        (err: any) => {
          alert("vehicle creation failed");
        }
      )
    }
  }
  }


