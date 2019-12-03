import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) { }

  getPeoples() {
    return this.http.get('https://swapi.co/api/people/  ');
  }

  getPlanets() {
    return this.http.get('https://swapi.co/api/planets/  ');
  }

  getStarships() {
    return this.http.get('https://swapi.co/api/starships/  ');
  }
}
