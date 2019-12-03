import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  starships: unknown[];


  constructor(private starwarsService: StarwarsService) { }

  ngOnInit() {
    this.starwarsService.getStarships().subscribe(results => {
      console.log(results);
      this.starships = results.results;
    });
  }

}
