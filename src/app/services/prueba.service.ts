import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country-response';

@Injectable({providedIn: 'root'})
export class PruebaService {

  private _http = inject(HttpClient);
  getCountries(): Observable<Country[]>{
    return this._http.get<Country[]>('https://restcountries.com/v3.1/name/pe');
 }
  
}