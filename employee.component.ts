import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {

  public s1:string = "";
  public s2:string = "";
  public col:string = "";
  public con:string = "";
  public eid:string = "";
  public en:string = "";
  public sal:string = "";
  public job:string = "";
  public dept:string = "";
  public read:boolean = false;
  

  public emps:any[] = [
    {eid:123,en:"yash",sal:5000,job:"clerk",dept:20},
  {eid:124,en:"kanna",sal:25000,job:"manager",dept:10},
  {eid:129,en:"yash",sal:5000,job:"clerk",dept:20},
  {eid:120,en:"yash",sal:5000,job:"clerk",dept:20},
  {eid:121,en:"yash",sal:5000,job:"clerk",dept:20},
  {eid:122,en:"yash",sal:5000,job:"clerk",dept:20},
  {eid:125,en:"rahul",sal:15000,job:"salesman",dept:30},
  {eid:128,en:"yash",sal:5000,job:"clerk",dept:20},
  {eid:126,en:"rajesh",sal:125000,job:"CEO",dept:40}];

  public f1():void{
    if(this.s1=="yashwanth"&&this.s2==""){
        this.col="green";
        this.con="Valid user";
    }
    else{
      this.col="red";
      this.con="Invalid user";
    }
  }
  public f2():void{
    let add:any={}
       add.eid=parseInt(this.eid);
       add.en=this.en;
       add.sal=this.sal;
       add.job=this.job;
       add.dept=parseInt(this.dept);
       this.emps.push(add);
       this.eid="";
       this.en="";
       this.sal="";
       this.job="";
       this.dept="";
  }
  public f4(eid:number):void{
    let ind:number=this.emps.findIndex(item=>item.eid==eid);
    this.emps.splice(ind,1);
  }
  public f3(eid:number):void{
    let ind:number=this.emps.findIndex(item=>item.eid==eid);
    this.eid=this.emps[ind].eid;
    var id=document.getElementById("yas");
    
    this.en=this.emps[ind].en;
    this.sal=this.emps[ind].sal;
    this.job=this.emps[ind].job;
    this.dept=this.emps[ind].dept;
  }
  public f5():void{
    let ind:number=this.emps.findIndex(item=>item.eid==this.eid);
    this.emps[ind].eid=this.eid;
    this.emps[ind].en=this.en;
    this.emps[ind].sal=this.sal;
    this.emps[ind].job=this.job;
    this.emps[ind].dept=this.dept;
    this.eid="";
    this.en="";
    this.sal="";
    this.job="";
    this.dept="";
    
    var id=document.getElementById("yas");
    
  }  

}
