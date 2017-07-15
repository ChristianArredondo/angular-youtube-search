import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { SearchResult } from './search-result-model';
import { YoutubeSearchService } from './youtube-search.service';

@Component({
  selector: 'app-search-box',
  template: `
  <input type="text" class="form-control" placeholder="Search" autofocus>`,
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading = new EventEmitter<boolean>();
  @Output() results = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YoutubeSearchService,
    private el: ElementRef) {
    }

  ngOnInit(): void {
    console.log('search box');
    Observable.fromEvent(this.el.nativeElement, 'keyup')
    .map((e:any) => e.target.value) //extract the exact value of the input
    .filter((text:string) => String.length > 1) //filter out if empty
    .debounceTime(250)
    .do(() => this.loading.emit(true)) //enable loading
    .map((query: string) => this.youtube.search(query))
    .switch()
    // act on the return of the search
    .subscribe(
      (results: SearchResult[]) => { //on success
        this.loading.emit(false);
        this.results.emit(results);
        console.log('lol');
      },
      (err: any) => { //on error
        console.log(err);
        this.loading.emit(false);
      },
      () => { //on completion
        this.loading.emit(false);
      }
    );
  }

}
