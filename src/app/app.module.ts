import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebHomeComponent } from './web-home/web-home.component';
import { LaunchWebSessionDetailComponent } from './launch-web-session-detail/launch-web-session-detail.component';

@NgModule({
  declarations: [AppComponent, WebHomeComponent, LaunchWebSessionDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
