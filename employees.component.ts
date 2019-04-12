import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public empno:number  = 45454;
  public ename:string  = "Scott";
  public deptno:number  = 40;

  public cities:string[] = ["Hyderabad", "Chennai", "Goa", "Pune", "Mumbai", "Guntur", "Goa"];
			
  public deptObj:any ={deptno:10,  dname: "Accounts", loc : "Hyd"};

  public depts:any[] = [
    {deptno:10,  dname: "Accounts", loc : "Hyd"},
    {deptno:20,  dname: "Sales", loc : "Goa"},
    {deptno:30,  dname: "Marketing", loc : "Pune"},
    {deptno:40,  dname: "Operations", loc : "Chinnai"},
  ];

  public yash:string="kanna";


}
