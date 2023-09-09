import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorComponent} from "./author/author.component";
import {HomeComponent} from "./home/home.component";
import {FormInputsComponent} from "./author/form-inputs/form-inputs.component";

const routes: Routes = [
  {
    path: 'admin', component: HomeComponent,
    children: [
      {
        path: 'author', children: [
          {path: '', component: AuthorComponent},
          {path: 'form', component: FormInputsComponent}
        ]
      },
      {path: '', redirectTo: '/admin', pathMatch: "full"},
      {path: '**', redirectTo: '/not-found', pathMatch: "full"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule {
}
