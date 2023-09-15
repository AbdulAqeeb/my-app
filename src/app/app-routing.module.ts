import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { TableComponent } from './table/table.component';
import { PipesComponent } from './pipes/pipes.component';
import { GradeComponent } from './grade/grade.component';
import { BankComponent } from './bank/bank.component';
import { UsersComponent } from './users/users.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { PracticeComponent } from './practice/practice.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmailComponent } from './email/email.component';
import { GallaryComponent } from './gallary/gallary.component';
import { BoredomComponent } from './boredom/boredom.component';
import { GithubComponent } from './github/github.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { UserComponent } from './user/user.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { authenticationGuard } from './authentication.guard';
import { notifyGuard } from './notify.guard';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { TodoComponent } from './todo/todo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingChildComponent } from './rating-child/rating-child.component';
import { RatingParentComponent } from './rating-parent/rating-parent.component';
import { ResultParentComponent } from './result-parent/result-parent.component';
import { ResultChildComponent } from './result-child/result-child.component';
import { ItemComponent } from './item/item.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { AboutCeoComponent } from './about/about-ceo/about-ceo.component';
import { AboutCompanyComponent } from './about/about-company/about-company.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'todo', component: TodoComponent},
{path: 'dashboard', component: DashboardComponent,canActivate:[authenticationGuard], children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'data-binding', component: DataBindingComponent},
      {path: 'calculator', component: CalculatorComponent},
      {path: 'rectangle', component: RectangleComponent},
      {path: 'bmi', component: BmiComponent},
      {path: 'directives', component: DirectivesComponent},
      {path: 'table', component: TableComponent},
      {path: 'pipes', component: PipesComponent},
      {path: 'Grade', component: GradeComponent},
      {path: 'bank', component: BankComponent},
      {path: 'users', component: UsersComponent},
      {path: 'vehicle', component:VehicleComponent},
      {path: 'account', component:AccountComponent},
      {path: 'practice', component:PracticeComponent},
      {path: 'flipkart', component:FlipkartComponent},
      {path: 'email', component:EmailComponent},
      {path: 'gallary', component:GallaryComponent},
      {path: 'boredom', component:BoredomComponent},
      {path: 'github', component:GithubComponent},
      {path: 'createvehicle', component:CreatevehicleComponent,canDeactivate:[notifyGuard]},
      {path: 'vehicledetails/:id', component:VehicledetailsComponent},
      {path: 'edit vehicle/:id', component:CreatevehicleComponent},
      {path: 'user', component:UserComponent},
      {path: 'createaccount', component:CreateaccountComponent,canDeactivate:[notifyGuard]},
      {path: 'parent', component:ParentComponent},
      {path: 'child', component:ChildComponent},
      {path: 'rating-parent', component:RatingParentComponent},
      {path: 'rating-child', component:RatingChildComponent},
      {path: 'result-parent', component:ResultParentComponent},
      {path: 'result-child', component:ResultChildComponent},
      {path: 'item', component:ItemComponent},
      {path: 'nav', component:NavComponent},
      {path: 'cart', component:CartComponent},
      {path: 'about-ceo', component:AboutCeoComponent},
      {path: 'about-company', component:AboutCompanyComponent},
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m =>m.ContactModule)
      },
      
    ]
  },
  { path: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
