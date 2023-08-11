import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;
  public isLoading: boolean = false;

  constructor(private constriesServices: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.constriesServices.cacheStore.byRegion.countries;
    this.selectedRegion = this.constriesServices.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region) {
    this.isLoading = true;
    this.selectedRegion = region;
    this.constriesServices.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
