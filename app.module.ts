import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './New.Component';
import { LoginComponent } from './login/login.component';
import { PercentagePipe } from './percentage.pipe';
import { StudentsComponent } from './students/students.component';
import { GradePipe } from './grade.pipe';
import { RegisterComponent } from './register/register.component';
import { ModelregisterComponent } from './modelregister/modelregister.component';
import { ProductsComponent } from './products/products.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { DetailsComponent } from './details/details.component';
import { LoginService } from './login.service';

const  appRoutes : Routes  =  [
  {path :  "",  component:  LoginComponent  },
  {path :  "Register",  component:  RegisterComponent },
  {path :  "Mregister",  component:  ModelregisterComponent},
  {path :  "Students",  component:  StudentsComponent, canActivate : [LoginService]},
  {path :  "Employee",  component:  EmployeeComponent, canActivate : [LoginService]},
  {path :  "Products",  component:  ProductsComponent, canActivate : [LoginService]},
  {path:"details/:id" , component:DetailsComponent}
 ];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PercentagePipe,
    StudentsComponent,
    GradePipe,
    RegisterComponent,
    ModelregisterComponent,
    ProductsComponent,
    EmployeesComponent,
    EmployeeComponent,
    DetailsComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [NewComponent]
})
export class AppModule { }

