import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private router:Router,private obj:HttpClient,private rou:ActivatedRoute)
  {}
  public ar:any[];
  public s1:string = "";
  public s2:string = "";
  public col:string = "";
  public con:string = "";
  public f1():void{
    let str:string = this.rou.snapshot.queryParams["url"];
   var url:string="http://localhost:3003/user/get/"+this.s1+"/"+this.s2;
   this.obj.get(url).subscribe(response=>{
    
    if(response[0].fname == this.s1){ 
    localStorage.setItem("Login",this.s1);  
    this.router.navigate([str]);
    } 
  else if(!(response[0])){
      this.col="red";
    this.con="Invalid user and password";
  }
  });

  }
 
}
