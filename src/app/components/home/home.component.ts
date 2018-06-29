import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

nuevasCanciones: any [] = [];
loading: boolean;
error = false;
mensajeError: string;


constructor (private spotify: SpotifyService) {
  this.loading = true;
  this.spotify.getNewReleases().subscribe( (data: any ) => {
    console.log(data);
    this.nuevasCanciones = data;
    this.loading = false;
  }, (err) => {
    this.loading = false;
    this.error = true;
console.log(err);
this.mensajeError = err.error.error.message;


  });
}

/* este metodo utiliza un servicio que nos devuelve todos los paises en los que se habla espa;ol
paises: any[] = [];

  constructor(private http: HttpClient) { 
console.log("Constructor hecho");
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe(resp=>{
      this.paises =resp;
      console.log(resp);
    });
  }*/


}
