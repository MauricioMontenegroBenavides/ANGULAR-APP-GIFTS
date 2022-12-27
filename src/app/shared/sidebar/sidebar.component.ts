import { AstMemoryEfficientTransformer, ConstantPool } from '@angular/compiler';
import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifts/service/gifs.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent  {

  constructor(public serv:GifsService) {}

  get mostrar(){
       return this.serv.historial
  }

  cambiarNombre(e:string){
    // como evento seria e:any
    // $event
    // this.serv.buscarGifs(e.path[0].textContent)
    this.serv.buscarGifs(e)
  }
}
