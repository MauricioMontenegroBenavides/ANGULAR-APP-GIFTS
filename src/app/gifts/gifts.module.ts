import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftsPageComponent } from './gifts-page/gifts-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { FormsModule } from '@angular/forms';
import { SearchGifsResponse } from './interfaces/Gif.interfaces';


@NgModule({
  declarations: [
    GiftsPageComponent,
    BusquedaComponent,
    ResultadosComponent,
  ],
  imports: [
    CommonModule,FormsModule

  ],
  exports:[GiftsPageComponent]
})
export class GiftsModule { }
