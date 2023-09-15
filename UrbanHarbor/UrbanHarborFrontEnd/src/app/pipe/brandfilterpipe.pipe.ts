import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandfilterpipe'
})
export class BrandfilterpipePipe implements PipeTransform {

  transform(value: any, brandType: any): any {
    if(value.length===0){
      return value;
    }
    return value.filter(function(val:any){
      return val.brand.indexOf(brandType) > -1 
    });
  }


}
