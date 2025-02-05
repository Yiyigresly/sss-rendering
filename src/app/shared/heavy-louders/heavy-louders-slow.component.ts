import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  signal,
} from '@angular/core';
import { PruebaService } from '../../services/prueba.service';
import { Country } from '../../interfaces/country-response';

@Component({
  selector: 'heavy-louders-slow',
  imports: [],
  template: `
    <ul [class]="cssClass">
      @for (item of countries(); track $index) {
      <li>{{ item.name.common }}</li>
      }
    </ul>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // PruebaService
  ],
})
export class HeavyLoudersSlowComponent {
  @Input({ required: true })
  public cssClass!: string;

  public countries = signal<Country[]>([]);
  private service = inject(PruebaService);

  constructor(){
    const start = Date.now();
    while( Date.now() - start < 3000){}
  }
  ngOnInit(): void {
    this.service.getCountries().subscribe((countries) => {
      this.countries.set(countries);
    });
  }
}
