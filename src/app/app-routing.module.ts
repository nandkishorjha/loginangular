import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'outTeam',
    component: OurteamComponent
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
