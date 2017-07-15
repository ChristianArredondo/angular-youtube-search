import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SearchResult } from './youtube-search/search-result-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: SearchResult[];
  loading: boolean;

  constructor() { }

  ngOnInit() { }

  updateResults(results: SearchResult[]): void {
    console.log('main app');
    this.results = results;
    console.log('results: ', this.results);
  }
}
