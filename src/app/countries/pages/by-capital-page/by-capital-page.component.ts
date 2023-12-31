import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';
  constructor(private constriesServices: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.constriesServices.cacheStore.byCapital.countries;
    this.initialValue = this.constriesServices.cacheStore.byCapital.term;
  }
  searchByCapital(term: string) {
    this.isLoading = true;

    this.constriesServices.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
