import { Observable } from 'rxjs';
import { MarvelApiService } from './../../../service/marvel-service/marvel-api.service';
import { Component, OnInit } from '@angular/core';


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

  charactersResult(resultCharactersFind: Observable<any>){
    resultCharactersFind.subscribe((result:any) => {

      if(result.length === 0) {

      } else {
        this.characters = resultCharactersFind;
      }
    })
  }


  addCharacters(){
    this.characters.subscribe((value: any) => {

      if(value) {

        let count = value.length;
        count = count + 10;
        this.characters = this.serviceMarvel.getAddCharacters(count);
  
        console.log('value', value);
      }
      
    })
  }

  

}
