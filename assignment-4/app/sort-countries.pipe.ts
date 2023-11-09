import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortCountries'
})
export class SortCountriesPipe implements PipeTransform {
  transform(countries: string[], direction: 'asc' | 'desc'): string[] {
    if (direction === 'asc') {
      return countries.sort();
    } else {
      return countries.sort().reverse();
    }
   }

}
