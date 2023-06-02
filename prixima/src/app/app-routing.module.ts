import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutBodyComponent } from './about-body/about-body.component';
import { AboutComponent } from './about/about.component';
import { BlogBodyComponent } from './blog-body/blog-body.component';
import { BlogBody2Component } from './blog-body2/blog-body2.component';
import { BlogComponent } from './blog/blog.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { FootComponent } from './foot/foot.component';
import { HeadPartComponent } from './head-part/head-part.component';
import { HeadComponent } from './head/head.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReviewComponent } from './review/review.component';
import { ServiceBodyComponent } from './service-body/service-body.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'', component:HomeComponent ,pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'head',component:HeadComponent},
  {path:'about',component:AboutComponent},
  {path:'service',component:ServiceComponent},
  {path:'team',component:TeamComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'review',component:ReviewComponent},
  {path:'blog',component:BlogComponent},
  {path:'contact',component:ContactComponent},
  {path:'foot',component:FootComponent},
  {path:'client',component:ClientComponent},
  {path:'about-body',component:AboutBodyComponent},
  {path:'blog-body',component:BlogBodyComponent},
  {path:'blog-body2',component:BlogBody2Component},
  {path:'service-body',component:ServiceBodyComponent,},
  {path:'head-part',component:HeadPartComponent},
  {path:'**',component:TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
