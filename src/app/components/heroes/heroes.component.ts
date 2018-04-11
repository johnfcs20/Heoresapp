import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[]=[];

  constructor(private _heroesService: HeroesService) {


    this._heroesService.getHeroes().subscribe(data=>{

      console.log(data);
      this.heroes = data;
      /*for(let key in data){
        console.log(data[key]);
        this.heroes.push(data[key]);
      }*/

    })

  }

  ngOnInit() {
  }

  borrarHeroe(key: string){
    this._heroesService.borrarHeroe(key).subscribe(data=>{
      if (data){
        console.log(data);
      }else{
        delete this.heroes[key];
      }

    })
  }

}
