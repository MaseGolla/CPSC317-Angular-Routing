import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  constructor(private starwarsService: StarwarsService) { }

  ngOnInit() {
    this.starwarsService.getPlanets().subscribe(results => {
      console.log(results);
    });
  }

}
