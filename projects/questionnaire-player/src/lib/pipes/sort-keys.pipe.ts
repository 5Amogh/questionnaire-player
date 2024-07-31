import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortKeys'
})
export class SortKeysPipe implements PipeTransform {
  transform(value: any): any {
    if (!value) return value;

    return Object.keys(value).sort((a, b) => {
      const pageNumberA = parseInt(a.split(" ")[1]);
      const pageNumberB = parseInt(b.split(" ")[1]);
      return pageNumberA - pageNumberB;
    })
  }
}
