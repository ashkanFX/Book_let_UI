import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorComponent} from "./author/author.component";

const routes: Routes = [
  {path:'admin',component:AuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
