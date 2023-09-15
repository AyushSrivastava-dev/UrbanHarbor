import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricefilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(value: any, minValue: any, maxValue:any ): any {
    if(value.length === 0){
      return value
    }
    if (maxValue) {
      console.log("yes max");
      value = value.filter(function(item :any) {
        return item.price <= +maxValue;
      });
    }
    if (minValue) {
      console.log("min");
      value = value.filter(function(item :any) {
        return (item.price >= +minValue);
      });
    } 
   
    return  value;

    // return value.filter((item: any) => {
    //   const price = item.price;
    //   return (!minValue || price >= +minValue) && (!maxValue || price <= +maxValue);
    // });
  }
}
