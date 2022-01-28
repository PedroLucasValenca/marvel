import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MarvelApiService } from 'src/app/service/marvel-service/marvel-api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SeriesMarvelApiService } from 'src/app/service/series-service/series-marvel-api.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  valueParam: any;
  filterObservable!: Observable<any>;
  @Output() filterValue = new EventEmitter();
  @Input() placeholder = '';

  constructor(private serviceMarvel: MarvelApiService,
              private serviceSeries: SeriesMarvelApiService,
              private router: Router) { }

  ngOnInit(): void {
   
  }

  verifyRoute() {
    if(this.router.url === '/characters') {
      this.searchCharacterByStartName();
    }else if(this.router.url === '/series') {
      this.searchSeriesByTitleStartsWith();
    }
  }


  searchCharacterByStartName() {
    if(this.valueParam) {
      this.filterObservable = this.serviceMarvel.getCharactersByStartName(this.valueParam);
      this.filterValue.emit(this.filterObservable);
    }else {
      this.filterObservable = this.serviceMarvel.getCharacters();
      this.filterValue.emit(this.filterObservable);
    }
    
  }

  searchSeriesByTitleStartsWith() {
    if(this.valueParam) {
      this.filterObservable = this.serviceSeries.getSeriesByTitleStartsWith(this.valueParam);
      this.filterValue.emit(this.filterObservable);
    }else {
      this.filterObservable = this.serviceSeries.getSeries();
      this.filterValue.emit(this.filterObservable);
    }
    
  }

}
