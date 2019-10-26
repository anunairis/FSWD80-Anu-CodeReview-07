import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageHeroComponent } from './home-page-hero/home-page-hero.component';
import { HomePageContentComponent } from './home-page-content/home-page-content.component';
import { AboutPageComponent} from  './about-page/about-page.component';
import { ToursComponent } from './tours/tours.component';


const routes: Routes = [
  {
    path: "", component: HomePageHeroComponent
  },
  {
    path: "about", component: AboutPageComponent
  },
  {
    path: "tours", component: ToursComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
