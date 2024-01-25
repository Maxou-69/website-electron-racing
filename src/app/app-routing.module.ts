import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ProcessComponent } from './process/process.component';
import { TeamComponent } from './team/team.component';
import { DesignComponent } from './design/design.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'accueil', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'team', component: TeamComponent },
  { path: 'design', component: DesignComponent },
  { path: 'sponsor', component: SponsorComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
