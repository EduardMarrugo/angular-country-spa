import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'contries-table',
  templateUrl: './contries-table.component.html',
  styles: [
    `
      img {
        width: 25px;
      }
    `,
  ],
})
export class ContriesTableComponent {
  @Input()
  public countries: Country[] = [];
}
