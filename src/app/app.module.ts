import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleHttpComponentComponent } from './simple-http-component/simple-http-component.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { YoutubeSearchInjectables } from './youtube-search/youtube-search.injectables';
import { SearchResultsComponent } from './youtube-search/search-results.component';
import { SearchBoxComponent } from './youtube-search/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponentComponent,
    YoutubeSearchComponent,
    SearchResultsComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [YoutubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
