import { Component } from '@angular/core';
import {PassCheckService} from '../pass-check.service' 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  public  name:string   = "Yashwanth";
  public  email:string   = "yashwabth@gmail.com";
  public  pass:string   = "yashwanth1A";
  public  cpass:string   = "yashwanth1A";
  public details:string="";
  public f2():void{
    if(this.pass==this.cpass){
    this.details="User Registered Successfully";
    }
    else{
      this.details="Password does not match";
    }
  }
  constructor(private serviceObj:PassCheckService)	{}
  public f3():boolean{
    this.details=this.serviceObj.pass(this.pass,this.cpass);
    if(this.details=="Password Matched"){
      return false;
    }
    else{
      return true;
    }
  }

}
