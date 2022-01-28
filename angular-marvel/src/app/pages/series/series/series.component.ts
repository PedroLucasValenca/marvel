import { SeriesMarvelApiService } from './../../../service/series-service/series-marvel-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  series!: Observable<any>;
  placeholder: string = 'Busque pelo começo do nome da sua serie ou nome completo'

  constructor(private serviceSeries: SeriesMarvelApiService,
              private router: Router) { }

  ngOnInit(): void {
  
      this.getSeries();
    
  }



  getSeries() {
   this.series = this.serviceSeries.getSeries();
    
  }

  filterFind(valueParam: string){

    if(valueParam) {
      this.series = this.serviceSeries.getSeriesByTitleStartsWith(valueParam);

      this.series.subscribe((result:any) => {

        if(result.length === 0) {
          this.router.navigateByUrl("/not-found");
        } else {
          this.series = this.series;
        }
      });
    }else {
      this.series = this.serviceSeries.getSeries();
    }

    
  }


  addSeries(){
    this.series.subscribe((value: any) => {

      if(value) {

        let count = value.length;
        count = count + 10;
        this.series = this.serviceSeries.getAddSeries(count);
  
      }
      
    })
  }


  

}
