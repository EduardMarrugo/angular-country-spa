import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public initialValue: string = '';
  public isLoading: boolean = false;
  constructor(private constriesServices: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.constriesServices.cacheStore.byCountry.countries;
    this.initialValue = this.constriesServices.cacheStore.byCountry.term;
  }

  searchByCountry(term: string) {
    this.isLoading = true;
    this.constriesServices.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
