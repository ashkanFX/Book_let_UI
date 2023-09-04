import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorComponent} from "./author/author.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: 'admin', component: HomeComponent,
    children: [
      {path : 'author' , component:AuthorComponent},
      {path : '' , redirectTo: '/admin' , pathMatch : "full"},
      {path : '**' , redirectTo:'/not-found' , pathMatch : "full"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule {
}
