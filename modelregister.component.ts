import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {PassCheckService} from '../pass-check.service' ;
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-modelregister',
  templateUrl: './modelregister.component.html',
  styleUrls: ['./modelregister.component.css']
})
export class ModelregisterComponent  {
  public customerForm = new  FormGroup({
    fname  :  new FormControl(null, Validators.required),
     email  :  new FormControl(null, Validators.email),
     mobile  :  new FormControl(null, Validators.pattern("\\d{10}")),
    pass :  new FormControl(null, [Validators.required,Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]),
    cpass :  new FormControl(null, [Validators.required,Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]),
   
  });
  public users:any[];
  public user:any={};
  public details:string;
  public pass:string="";
  public cpass:string="";
  public email:string;
  public mob:number;
  public x:boolean=true;
  public fname:string;
  constructor(private router: Router,private serviceObj:PassCheckService,private  httpObj:HttpClient)	{}
  
  public f1():void
  {
      var user={
        fname:this.fname,
        email:this.email,
        mob:this.mob,
        pass:this.cpass
      };
      var url="http://localhost:3003/user/add";
      this.httpObj.post(url,user).subscribe((response:any)  =>
      {
        this.router.navigate(["/"]);
      });
  }	

 public f2(){
    this.details=this.serviceObj.pass(this.pass,this.cpass);
    if(this.details=="Password Matched"){
      this.x=false;
    }
    else{
      this.x=true;
    }
  }
  f3(i:boolean):boolean{
    if(i==false && this.x==false){
    return false;
   }
   else{
    return true;
   }
  }

}
