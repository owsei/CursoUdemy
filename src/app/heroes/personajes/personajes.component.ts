import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-perosonajes',
  templateUrl: './personajes.component.html',
  styleUrls: []
})
export class PersonajesComponent implements OnInit {

  @Input() personajes:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
