import { Component } from '@angular/core';
import { Datum } from '../interfaces/Gif.interfaces';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',

})
export class ResultadosComponent  {

  constructor(public mostrar:GifsService) { }

  get resultados1():Datum[]{
    return this.mostrar.resultados
  }
}
