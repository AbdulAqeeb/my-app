import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  public time:number = 0;
  

  public ages:number[] = [10,20,30,40,50];

  public states:string[] = ['Telangana', 'Andhra pradesh', 'Maharastra', 'karnataka'];

  public users:any = [
    {name:'Aqeeb',age:3,marks:90,phone:9494309977,},
    {name:'Asif',age:13,marks:20,phone:9182326713},
    {name:'Tazeem',age:15,marks:30,phone:9063843593},
    {name:'Rafath',age:25,marks:40,phone:8331840430},
  ]

    public term:string = "";

    filter(){
      this.users = this.users.filter((value:any)=>value.name.includes(this.term))
    }

    ageHighToLow(){
      this.users = this.users.sort((a:any,b:any)=>b.age-a.age);
    }

    increaseByOne(){
      this.users = this.users.map((value:any)=>{
      value.age = value.age+1;
          return value;
      });
    } 

    total(){
      let total = this.users.reduce((sum:any,a:any)=>sum+a.age,0);
      alert(total);
    }
    delete(i:any){
      this.users.splice(i,1);
    }
  }