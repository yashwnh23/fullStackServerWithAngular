import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public sno:number;
  public sname:string;
  public per:number;
  public grade:string;
  public stu:any[]=[
    {sno:1,sname:"yashwanth",per:61.87,grade:"B"},
    {sno:2,sname:"himanshu",per:65.00,grade:"B+"},
    {sno:3,sname:"laxman",per:75.56,grade:"A"},
    {sno:4,sname:"shashank",per:87,grade:"A+"},
  ];
  public f3(){
    var obj={
      sno:this.sno,
      sname:this.sname,
      per:this.per,
      grade:this.grade
    };
    this.stu.push(obj);
    this.sno=null;
    this.sname="";
    this.per=null;
    this.grade="";
  }
  public f1(sno:number){
   var index = this.stu.findIndex(a=>a.sno==sno);
   var k = this.stu[index];
   this.sno = k.sno;
   this.sname=k.sname;
   this.per=k.per;
   this.grade=k.grade;
  }
  public f2(sno:number){
    var index = this.stu.findIndex(a=>a.sno==sno);
    this.stu.splice(index,1);
  }
  public f4(){
    var index = this.stu.findIndex(a=>a.sno==this.sno);
    var k = this.stu[index];
    k.sno=this.sno ;
    k.sname=this.sname;
    k.per=this.per;
    k.grade=this.grade;
    this.sno=null;
    this.sname="";
    this.per=null;
    this.grade="";
  }

}
