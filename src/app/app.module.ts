import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';

import { HomePageHeroComponent } from './home-page-hero/home-page-hero.component';
import { HomePageContentComponent } from './home-page-content/home-page-content.component';
import { HomePageHeroService } from "./shared/home-page-hero.service";


import { AboutPageComponent } from './about-page/about-page.component';


import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";


import { ToursComponent } from './tours/tours.component';
import { ToursListComponent } from './tours-list/tours-list.component';
import { ToursService } from "./shared/tours.service";
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageHeroComponent,
    HomePageContentComponent,
    AboutPageComponent,
    ToursComponent,
    ToursListComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  
  providers: [ToursService, HomePageHeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
