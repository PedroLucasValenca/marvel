import { Router } from '@angular/router';
import { ComicsMarvelApiService } from './../../../service/comics-service/comics-marvel-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  comics!: Observable<any>;

  placeholder: string = 'Busque pelo começo do nome da sua Histórias em Quadrinhos ou nome completo'

  constructor(private serviceComics: ComicsMarvelApiService,
              private router: Router) { }

  ngOnInit(): void {
  
      this.getComics();
    
  }



  getComics() {
   this.comics = this.serviceComics.getComics();
    
  }

  filterFind(valueParam: string){

    if(valueParam) {
      this.comics = this.serviceComics.getComicsByTitleStartsWith(valueParam);

      this.comics.subscribe((result:any) => {

        if(result.length === 0) {
          this.router.navigateByUrl("/not-found");
        } else {
          this.comics = this.comics;
        }
      });
    }else {
      this.comics = this.serviceComics.getComics();
    }
    
  }


  addComics(){
    this.comics.subscribe((value: any) => {

      if(value) {

        let count = value.length;
        count = count + 10;
        this.comics = this.serviceComics.AddComics(count);
  
      }
      
    })
  }



}
