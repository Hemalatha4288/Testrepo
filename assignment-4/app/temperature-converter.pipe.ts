import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {
    transform(value: number, unit: string): number {
      if (isNaN(value)) {
        return value;
      }
  
      if (unit === 'F') {
        // Convert Fahrenheit to Celsius
        return ((value - 32) * 5) / 9;
      } else if (unit === 'C') {
        // Convert Celsius to Fahrenheit
        return (value * 9) / 5 + 32;
      } else {
        return value;
      }
    }
  }


