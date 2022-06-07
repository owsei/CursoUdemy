import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/heroes.interface";

@Injectable()
export class HeroesService{

    datos:number[]=[];
    private _personajes:Personaje[]=[{nombre:'Goku',poder:14000},{nombre:'Vegeta',poder:7500}];
    
    constructor(){
        console.log('HeroesService inicializado');
    }

    get personajes():Personaje[]{
        return [...this._personajes];
    }

    
    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }

    

}