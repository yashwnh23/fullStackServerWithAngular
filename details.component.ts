import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  public pn:string = "";
  public br:string = "";
  public cat:string = "";
  public pri:number ;
  constructor(private httpObj:HttpClient,private route:ActivatedRoute) { 
    var eno  = this.route.snapshot.params["id"];
    let url="http://localhost:3003/depts/get/"+eno;
  this.httpObj.get(url).subscribe( (response:any)  =>
  {
    this.pn  =  response[0].pname;
    this.br  =  response[0].brand;
    this.cat  =  response[0].categories;
    this.pri  =  response[0].price;
  });
  }
  
  ngOnInit() {
  }

}
