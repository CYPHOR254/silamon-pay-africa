import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: ContactComponent, path: 'contact' },
  {component: AboutComponent, path: 'about'},
  {component: ServicesComponent, path:'services'},
  {component: TeamComponent, path:'team'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
