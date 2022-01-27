import { Observable } from 'rxjs';
import { MarvelApiService } from './../../../service/marvel-service/marvel-api.service';
import { Component, OnInit } from '@angular/core';
import { CharactersModel } from '../../../models/characters-model/characters.model';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters!: Observable<any>;

  constructor(private serviceMarvel: MarvelApiService) { }

  ngOnInit(): void {
    this.getCharacters();
  }



  getCharacters() {
   this.characters = this.serviceMarvel.getCharacters();
    
  }

  

}
