import { Observable } from 'rxjs';
import { MarvelApiService } from './../../../service/marvel-service/marvel-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters!: Observable<any>;
  placeholder: string = 'Busque pelo começo do nome do seu personagem ou nome completo';

  constructor(private serviceMarvel: MarvelApiService,
              private router: Router) { }

  ngOnInit(): void {
  
      this.getCharacters();
    
  }



  getCharacters() {
   this.characters = this.serviceMarvel.getCharacters();
    
  }

  filterFind(valueParam: string){

    if(valueParam) {
      this.characters = this.serviceMarvel.getCharactersByStartName(valueParam);

      this.characters.subscribe((result:any) => {

        if(result.length === 0) {
          this.router.navigateByUrl("/not-found");
        } else {
          this.characters = this.characters;
        }
      });
      
    }else {
      this.characters = this.serviceMarvel.getCharacters();
    }
    
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
