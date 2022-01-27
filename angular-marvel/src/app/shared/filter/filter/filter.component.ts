import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MarvelApiService } from 'src/app/service/marvel-service/marvel-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  characterName: any;
  filterChatactersObservable!: Observable<any>;
  @Output() filterCharacters = new EventEmitter();

  constructor(private serviceMarvel: MarvelApiService) { }

  ngOnInit(): void {
  }


  seachCharacterByStartName() {
    if(this.characterName) {
      this.filterChatactersObservable = this.serviceMarvel.getCharactersByStartName(this.characterName);
      this.filterCharacters.emit(this.filterChatactersObservable);
    }else {
      this.filterChatactersObservable = this.serviceMarvel.getCharacters();
      this.filterCharacters.emit(this.filterChatactersObservable);
    }
    
  }

}
