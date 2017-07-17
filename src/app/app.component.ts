import { Component, OnInit } from '@angular/core';
import { SearchResult } from './youtube-search/search-result-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
results: SearchResult[];
loading: boolean;

  constructor() { }

  ngOnInit() {

  }

  updateResults(results: SearchResult[]): void {
    this.results = results;
    console.log('results: ', this.results);
  }

}
