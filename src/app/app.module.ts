import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInterceptor } from './core/interceptors/main.interceptor';
import { HomeModule } from './home/home.module';
import { RoomdetailModule } from './roomdetail/roomdetail.module';
import { RoomlistModule } from './roomlist/roomlist.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    RoomlistModule,
    RoomdetailModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
