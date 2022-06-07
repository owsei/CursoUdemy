import { Component } from '@angular/core';
import { HttpService } from './shared/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso Angular Udemy';

  numero:number=0;

  constructor(private httpService:HttpService){

  }

}
