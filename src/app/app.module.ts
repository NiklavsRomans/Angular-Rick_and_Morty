import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { LocationCardComponent } from './components/location-card/location-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SingleCharacterComponent } from './pages/single-character/single-character.component';
import { SingleCharacterCardComponent } from './components/single-character-card/single-character-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    LocationsComponent,
    CharacterCardComponent,
    LocationCardComponent,
    NavBarComponent,
    SingleCharacterComponent,
    SingleCharacterCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
