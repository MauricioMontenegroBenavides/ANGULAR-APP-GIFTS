import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import{SharedModule} from'./shared/shared.module'
import { GiftsModule } from './gifts/gifts.module';
import{HttpClientModule} from '@angular/common/http'// Esta importacion sirve para realizar peticiones http, es un servicio que se puede inyectar en otros servicios

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GiftsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
