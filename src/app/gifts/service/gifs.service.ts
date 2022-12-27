import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';// Este modulo trabaja en funcion de obserbable que es mas poderoso que las promesas
import { Datum, SearchGifsResponse } from '../interfaces/Gif.interfaces';


@Injectable({// el root eleva a un nivel global a la app y evita q se declare en gifts.module
  providedIn: 'root'// permite que el servicio este definido cuando se construye el bundle de la app
                   // Un bundle contiene todos los recuros de la app
                   // Es lo que deseamos que los servicios sean globales
})

export class GifsService {
   private _Apikey:string='wh9b6JK5NDlhIGRKqf3kPRwtPdl0KyVh'
   private _historial:string[]=[]
   public resultados:Datum[]=[]// Es Datum porque en la interfaz sale ese valor

   get historial(){
    return [...this._historial]
   }

   constructor(private PetiHttp:HttpClient){// Al llamar al servicio el constructor se ejecuta solo una vez
     if(localStorage.getItem('historial')){

      this._historial=JSON.parse(localStorage.getItem('historial')!)||[]// Con este comando obtenemos los datos del local storage

    }

      this.resultados=JSON.parse(localStorage.getItem('resultados')!)
   }

   buscarGifs(query:string){
      query=query.trim().toLowerCase()

      if(!this._historial.includes(query)){
        this._historial.unshift(query)// se inserta al inicio
        this._historial=this._historial.splice(0,10)
        localStorage.setItem('historial',JSON.stringify( this._historial));


      }

                 //******************************************************************//
    // API CON FETCH
    /* const data=(api:string)=>{
      return fetch(api)
    }
    data('https://api.giphy.com/v1/gifs/search?api_key=wh9b6JK5NDlhIGRKqf3kPRwtPdl0KyVh&q=dragon ball z&limit=1')
    .then(resp=>{
      return resp.json()
    })
    .then(data=>{
      console.log(data)
    }) */

                 //******************************************************************//
   // API CON ASYNC Y WAIT
  /*   const rest= await fetch('https://api.giphy.com/v1/gifs/search?api_key=wh9b6JK5NDlhIGRKqf3kPRwtPdl0KyVh&q=dragon ball z&limit=1')
    const rest2=rest.json();
    console.log(rest2)
    Simpre la funcion que contiene await debe tener un async  */


                  //******************************************************************//
     // Angular tambien ofrece un objeto que es el encargado de usar peticiones http

   this.PetiHttp.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=wh9b6JK5NDlhIGRKqf3kPRwtPdl0KyVh&q=${query} &limit=8`)
   .subscribe((resp)=>{   // SUbsCRIBE ES PARAECIDO AL .THEN
     console.log(resp.data)
     this.resultados=resp.data
     console.log(this.resultados)
     localStorage.setItem('resultados',JSON.stringify(this.resultados))


   })//La ventaja es que ofrece observabol, esto permite añadir funcionalidades, incluso poder disparar una peticiion simultanea
      //
  }
}

