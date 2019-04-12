import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  constructor(private router :Router){}
  public f1():void{
    localStorage.removeItem("Login");
    this.router.navigate(["/"]); 
  }
}
