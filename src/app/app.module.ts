import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgGCNodeVComponent } from './ng-g-c-node-v/ng-g-c-node-v.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { TableComponent } from './table/table.component';
import { PipesComponent } from './pipes/pipes.component';
import { GradeComponent } from './grade/grade.component';
import { BankComponent } from './bank/bank.component';
import { PricePipe } from './price.pipe';
import { AgePipe } from './age.pipe';
import { ImpDirective } from './imp.directive';
import { HttpClientModule} from '@angular/common/http';
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
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { TodoComponent } from './todo/todo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingParentComponent } from './rating-parent/rating-parent.component';
import { RatingChildComponent } from './rating-child/rating-child.component';
import { ResultParentComponent } from './result-parent/result-parent.component';
import { ResultChildComponent } from './result-child/result-child.component';
import { ItemComponent } from './item/item.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { AboutModule } from './about/about.module';
import { ContactHrComponent } from './contact-hr/contact-hr.component';
import { ContactSupportComponent } from './contact-support/contact-support.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    NgGCNodeVComponent,
    HomeComponent,
    AboutComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    BmiComponent,
    DirectivesComponent,
    TableComponent,
    PipesComponent,
    GradeComponent,
    BankComponent,
    PricePipe,
    AgePipe,
    ImpDirective,
    UsersComponent,
    VehicleComponent,
    AccountComponent,
    PracticeComponent,
    FlipkartComponent,
    EmailComponent,
    GallaryComponent,
    BoredomComponent,
    GithubComponent,
    CreatevehicleComponent,
    UserComponent,
    CreateaccountComponent,
    VehicledetailsComponent,
    TodoComponent,
    ParentComponent,
    ChildComponent,
    RatingParentComponent,
    RatingChildComponent,
    ResultParentComponent,
    ResultChildComponent,
    ItemComponent,
    NavComponent,
    CartComponent,
    ContactHrComponent,
    ContactSupportComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
