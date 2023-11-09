import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  intervalOdd: any;
  intervalEven: any;

  start() {
    this.intervalOdd = setInterval(() => {
      const newOdd = this.generateOddNumber();
      this.oddNumbers.push(newOdd);
    }, 1000);

    this.intervalEven = setInterval(() => {
      const newEven = this.generateEvenNumber();
      this.evenNumbers.push(newEven);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalOdd);
    clearInterval(this.intervalEven);
  }

  private generateOddNumber(): number {
    return Math.floor(Math.random() * 50) * 2 + 1;
  }

  private generateEvenNumber(): number {
    return Math.floor(Math.random() * 50) * 2;
  }

}
