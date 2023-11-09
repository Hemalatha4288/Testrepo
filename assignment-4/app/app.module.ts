import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReverseStringPipe } from './reverse-string.pipe';
import { FormsModule } from '@angular/forms';
import { ReadonlyDirective } from './readonly.directive';
import { WhitespacesDirective } from './Nowhitespaces.directive';
import { NumbersonlyDirective } from './numbersonly.directive';
import { MainComponent } from './main/main.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { TemperatureConverterPipe } from './temperature-converter.pipe';
import { CountryListComponent } from './country-list/country-list.component';
import { SortCountriesPipe } from './sort-countries.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReverseStringPipe,
    ReadonlyDirective,
    WhitespacesDirective,
    NumbersonlyDirective,
    MainComponent,
    OddComponent,
    EvenComponent,
    TemperatureConverterPipe,
    CountryListComponent,
    SortCountriesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
