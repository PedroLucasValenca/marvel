import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header/header.component';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './pages/characters/characters/characters.component';
import { FilterComponent } from './shared/filter/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found/page-not-found.component';
import { SeriesComponent } from './pages/series/series/series.component';
import { ComicsComponent } from './pages/comics/comics/comics.component';
import { HomeComponent } from './pages/home/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CharactersComponent,
    FilterComponent,
    PageNotFoundComponent,
    SeriesComponent,
    ComicsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
