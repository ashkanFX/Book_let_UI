import {NgModule} from '@angular/core';
import {provideRouter, RouterModule, Routes, withComponentInputBinding} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FormInputsComponent} from "./author/form-inputs/form-inputs.component";
import {ListComponent} from "./author/list/list.component";
import {AuthorComponent} from "./author/author.component";

const routes: Routes = [
  {
    path: 'admin', component: HomeComponent,
    children: [
      {
        path: 'author', children: [
          {path: '', component: ListComponent},
          {path: 'overView', component: AuthorComponent,  data: { title: "Search" }},
          {path: 'form', component: FormInputsComponent, title: "nemidonam"}
        ]
      },
      {path: '', redirectTo: '/admin/author', pathMatch: "full"},
      {path: '**', redirectTo: '/not-found', pathMatch: "full"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {bindToComponentInputs: true}) ],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding()),
  ]
})
export class PanelRoutingModule {
}
