import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FormInputsComponent} from "./author/form-inputs/form-inputs.component";
import {ListComponent} from "./author/list/list.component";

const routes: Routes = [
  {
    path: 'admin', component: HomeComponent,
    children: [
      {

        path: 'author', children: [
          {path: '', component: ListComponent},
          {path: 'form', component: FormInputsComponent}
        ]
      },
      {path: '', redirectTo: '/admin/author', pathMatch: "full"},
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
