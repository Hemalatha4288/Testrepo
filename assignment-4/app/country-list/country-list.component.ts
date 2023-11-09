import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
  countries: string[] = ['USA', 'Canada', 'India', 'Australia', 'Germany'];
  newCountry: string="";
  sortDirection: 'asc' | 'desc' = 'asc';

  addCountry() {
    if (this.newCountry && !this.countries.includes(this.newCountry)) {
      this.countries.push(this.newCountry);
      this.newCountry = " ";
    }
  }

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

}
