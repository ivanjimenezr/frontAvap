import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InmueblesComponent } from './pages/inmuebles/inmuebles.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ServicesService } from './pages/services.service';

@NgModule({
  declarations: [
    AppComponent,
    InmueblesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
