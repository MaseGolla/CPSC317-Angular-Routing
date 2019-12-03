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
  getPeople(id) {
    return this.http.get(`https://swapi.co/api/people/${id}  `);
  }

  getPlanets() {
    return this.http.get('https://swapi.co/api/planets/  ');
  }
  getPlanet(id) {
    return this.http.get(`https://swapi.co/api/planets/${id}  `);
  }

  getStarships() {
    return this.http.get('https://swapi.co/api/starships/  ');
  }
  getStarship(id) {
    return this.http.get(`https://swapi.co/api/starships/${id}  `);
  }
}
