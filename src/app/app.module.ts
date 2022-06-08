import { NgModule } from '@angular/core'; //  componente per far funzionare app module
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; //  creata di default
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component'; // l'abbiamo aggiunto noi

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //  l'ho richiamato da in cima
  ],
  providers: [],
  bootstrap: [AppComponent] // primo componente da lanciare
})
export class AppModule { }
