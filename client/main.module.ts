import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app/main/app.component';
import { HeaderComponent } from './app/main/header/header';
import { FooterComponent } from './app/main/footer/footer';
import { DashboardComponent } from './app/main/dashboard/dashboard';
import { SidebarComponent } from './app/main/sidebar/sidebar';

import { PagesManagementModule } from './app/page-manager';
import { MediaLibraryModule } from './app/media-library';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    PagesManagementModule,
    MediaLibraryModule,
    RouterModule.forRoot(appRoutes, {
      useHash: false
    }),
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
