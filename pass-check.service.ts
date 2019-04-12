import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassCheckService {
  public pass(pass:string, cpass:string) : string
  {
    let result:string  = "";

    if(pass==cpass)
    {
        result = "Password Matched";
    }    
    else    
    {
        result = "Password Does not match";
    } 

    return result;  
  }
}
