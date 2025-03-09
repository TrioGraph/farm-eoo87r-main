import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getValueById',
})
export class GetValueByIdPipe implements PipeTransform {
  transform(data: any[], key: any): any {
    let tempData = undefined;
    data.find((elem: any) => {
      if (elem.Parameter === key) {
        tempData = elem.Value;
      }
    });
    return tempData;
  }
}
