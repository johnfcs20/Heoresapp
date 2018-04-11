import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Heroe} from '../interface/heroe.interface';
import 'rxjs/Rx'

@Injectable()
export class HeroesService {

  heroesURL: string ="https://heroesapp-1d713.firebaseio.com/heroes"
  heroeURL: string ="https://heroesapp-1d713.firebaseio.com/heroes/.json"
  constructor(private http: Http) { }

  nuevoHeroe(heroe:Heroe){

    let body= JSON.stringify(heroe);
    let headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.heroeURL, body, {headers}).map(res=>{
      console.log(res.json());
        return res.json();
    })
  }

  actualizarHeroe(heroe:Heroe, key:string){

    let body= JSON.stringify(heroe);
    let headers = new Headers({'Content-Type': 'application/json'});

    let url = `${this.heroesURL}/${key}.json`;

    return this.http.put(url , body, {headers}).map(res=>{
      console.log(res.json());
        return res.json();
    })
  }

  getHeroe(key: string){

    let url=`${this.heroesURL}/${key}.json`;
    return this.http.get(url).map(res=>res.json());

  }

  getHeroes(){


    return this.http.get(this.heroeURL).map(res=>res.json());

  }

  borrarHeroe(key: string){
    let url= `${this.heroesURL }/${key}.json`;
    return this.http.delete( url ).map(res => res.json())
  }

}
