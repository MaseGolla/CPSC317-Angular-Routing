import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  peoples: unknown[];

  constructor(private starwarsService: StarwarsService) { }

  ngOnInit() {
    this.starwarsService.getPeoples().subscribe(results => {
      console.log(results);
      this.peoples = results.results;
    });
  }
}