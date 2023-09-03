import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {ShareModule} from "./structure/common/share.module";
import {MainPageModule} from "./structure/project/panel-page/main-page.module";
import {RouterOutlet} from "@angular/router";
import {ViewPageModule} from "./structure/project/view-page/view-page.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ShareModule,
    MainPageModule,
    RouterOutlet,
    ViewPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
    TranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
