import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  constructor(private  httpObj:HttpClient)
  {
    
  }
  public pn:string = "";
  public br:string = "";
  public cat:string = "";
  public pri:number ;
  public prods:any[];  
  
  public f6(){
    let url="http://localhost:3003/depts";
  this.httpObj.get(url).subscribe( (response:any)  =>
  {
    console.log(response);
    this.prods  =  response;
  });
  }
  public f7(id:string){
    let url="http://localhost:3003/depts/get/"+id;
  this.httpObj.get(url).subscribe( (response:any)  =>
  {
    this.pn  =  response[0].pname;
    this.br  =  response[0].brand;
    this.cat  =  response[0].categories;
    this.pri  =  response[0].price;
  });
  }
  public f8(id:string){
    alert(id);
    let url="http://localhost:3003/depts/rem/"+id;
  this.httpObj.get(url).subscribe( (response:any)  =>
  {
    console.log(response);
    this.f6();
  });
  }
  public f9(){
    var obj={
      pname:this.pn,
      brand:this.br,
      price:this.pri,
      categories:this.cat
    };
    let url="http://localhost:3003/depts/update/";
  this.httpObj.put(url,obj).subscribe( (response:any)  =>
  {
    console.log(response);
    this.f6();
  });
  }
  public f10(id:string){
    var obj={
    pname:this.pn,
    brand:this.br,
    price:this.pri,
    categories:this.cat
  };
    let url="http://localhost:3003/depts/add";
  this.httpObj.post(url,obj).subscribe( (response:any)  =>
  {
    console.log(response);
    this.f6();
  });
  }

}
