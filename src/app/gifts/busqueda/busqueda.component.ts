import { Component, ElementRef, ViewChild, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GifsService } from '../service/gifs.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',

})
export class BusquedaComponent  {

  nombre:string=''
  @ViewChild('t') tx!:ElementRef<HTMLInputElement>// En los parentesis va el nombre del elemento que se desea buscar(Se puede buscar por clases, directivas, elementos html)

  constructor(private serv:GifsService){}// Para usar el servicio se inyecta el servicio creando una propiedad

  leer(tx:string){ // Cuando tenemos ! indica que siempre va a tener algo
  // console.log(e)
   // Para poder anular el valor de la caja de texto hay dos formas
   //const x=document.querySelector('input')
   //x?.value
   const valor=this.tx.nativeElement.value
   if(valor.trim().length===0){
    return
   }

   this.serv.buscarGifs(valor)
   console.log(valor)
   this.tx.nativeElement.value=''

  }

}
