import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-perosonajes',
  templateUrl: './perosonajes.component.html',
  styleUrls: []
})
export class PerosonajesComponent implements OnInit {

  @Input() personajes:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
