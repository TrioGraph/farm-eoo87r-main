import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  constructor() {}

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value) {
      
      // return Date.parse(value.toString(),  'yyyy-MM-dd');
      if (value) {
        console.log('value : ', value);
        let tempDay = value.toString().substring(0,2);
        let tempMonth = value.toString().substring(3,5);
        let tempYear = value.toString().substring(6,10);
        return tempDay + '-' + tempMonth + '-' + tempYear;
      }
    }
    return null;
  }
}
