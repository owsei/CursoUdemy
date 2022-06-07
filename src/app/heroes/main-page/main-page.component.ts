import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/heroes.interface';
import { HeroesService } from '../services/heroes.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: []
})
export class MainPageComponent implements OnInit {
  
  nuevo:Personaje={
    nombre : '',
    poder : 0
  };

  //personajes:Personaje[]=[];

  get personajes(){
    return this.HeroesService.personajes;
  }

  constructor(private HeroesService:HeroesService) { 
  }

  ngOnInit(): void {
  }

  agregar(){
    if (this.nuevo.nombre.trim().length === 0){return;}

    this.HeroesService.agregarPersonaje(this.nuevo);

    this.nuevo={
      nombre : '',
      poder : 0
    };

  }

  
}
