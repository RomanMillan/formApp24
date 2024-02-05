import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SmallCountry } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url : string = 'https://restcountries.com/v3.1';
  private _regions: string[] = ['Africa','Americas', 'Antarctic', 'Asia', 'Europe', 'Oceania'];
  
  get regions(){
    return [...this._regions];
  }

  constructor(private http: HttpClient) { }

  getCountriesByRegion(region: string): Observable<SmallCountry[]>{
    return this.http.get<SmallCountry[]>(`${this.url}/region/${region}?fields=name,ccn3`);
  }

}
