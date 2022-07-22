import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';
import { CreateblogComponent } from './createblog/createblog.component';
import { ManageblogComponent } from './manageblog/manageblog.component';


const routes: Routes = [
  {path: "view", component:ViewComponent},
  {path: '', component:HomeComponent},
  {path: 'creatblog', component:CreateblogComponent},
  {path: 'manageblog', component:ManageblogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
