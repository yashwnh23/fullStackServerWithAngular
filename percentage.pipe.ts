import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(num:number):string {
    var str:string=num+"%";
    return str;
  }

}
