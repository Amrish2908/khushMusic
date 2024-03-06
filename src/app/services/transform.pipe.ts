import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})

export class KFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (value >= 1000) {
      const suffixes = ['', 'k', 'M', 'B', 'T'];
      const suffixNum = Math.floor(('' + value).length / 3);
      const shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(2));
      return shortValue + suffixes[suffixNum];
    }
    return value.toString();
  }
}
