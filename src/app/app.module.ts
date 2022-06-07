import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { PersonajesComponent } from './heroes/personajes/personajes.component';
import { MainPageComponent } from './heroes/main-page/main-page.component';
import { HeroesService } from './heroes/services/heroes.services';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroeComponent,
    PersonajesComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
