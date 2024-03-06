import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviateNumber'
})
export class AbbreviateNumberPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: number): string {
    if (value >= 1000) {
      // Convert to k (thousands)
      return (value / 1000).toFixed(1) + 'k';
    } else {
      return value.toString();
    }
  }

}
