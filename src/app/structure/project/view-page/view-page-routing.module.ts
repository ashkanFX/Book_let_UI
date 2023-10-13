import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {Page404Component} from "../../common/page404/page404.component";
import {Page500Component} from "../../common/page500/page500.component";
import {Page401Component} from "../../common/page401/page401.component";


const routes: Routes = [
  {path : ''  ,redirectTo : '/view' , pathMatch : 'full'},
  {path : 'view' , component:HomeComponent},
  {path : 'not-found' , component:Page404Component},
  {path : 'unauthorized-access' , component:Page401Component},
  {path : 'server-down' , component:Page500Component},
  {path : '**' , redirectTo:'/not-found' , pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ViewPageRoutingModule { }
