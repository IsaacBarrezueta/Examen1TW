import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  
  private clientes:Cliente[]=[
    {
      codRegistro: "001",
      fecha: "2023-07-31",
      cliente: "Armando Pelaño",
      tipo: "telefono",
      descripcion:"Relajado y tranquilo"
    },
    {
      codRegistro: "002",
      fecha: "2023-07-31",
      cliente: "Rejente Pelaño",
      tipo: "fijo",
      descripcion:"Relajado y tranquilo"
    },
    {
      codRegistro: "003",
      fecha: "2023-07-31",
      cliente: "Papo Polo",
      tipo: "celular",
      descripcion:"Relajado y tranquilo"
    },
    {
      codRegistro: "004",
      fecha: "2023-07-31",
      cliente: "Coco Paco",
      tipo: "instagram",
      descripcion:"Relajado y tranquilo"
    },
    {
      codRegistro: "005",
      fecha: "2023-07-31",
      cliente: "Nano",
      tipo: "facebook",
      descripcion:"Relajado y tranquilo"
    },
    {
      codRegistro: "006",
      fecha: "2023-07-31",
      cliente: "Manolo Caja",
      tipo: "facebook",
      descripcion:"Relajado y tranquilo"
    },
    {
      codRegistro: "007",
      fecha: "2023-07-31",
      cliente: "Chica Demicuadra",
      tipo: "facebook",
      descripcion:"Relajado y tranquilo"
    },
    {
      codRegistro: "008",
      fecha: "2023-07-31",
      cliente: "Lorena Manta",
      tipo: "facebook",
      descripcion:"Relajado y tranquilo"
    },
    {
      codRegistro: "009",
      fecha: "2023-07-31",
      cliente: "Paco Papa",
      tipo: "facebook",
      descripcion:"Relajado y tranquilo"
    },
    {
      codRegistro: "010",
      fecha: "2023-07-31",
      cliente: "Carlos Isaac",
      tipo: "facebook",
      descripcion:"Relajado y tranquilo"
    }
  ];
   filtro:string='';


  getClientes()
  {
    return this.clientes;
  }
  
  constructor() { 
    console.log("Servicio listo para usar...");
  
  }
  
  getCliente(idx: number):Cliente{
    return this.clientes[idx];
  }

  insertarCliente(codRegistro:string, fecha:string, cliente:string,tipo:string,descripcion:string){
    const heroe:Cliente={
      codRegistro: codRegistro,
      fecha:fecha,
      cliente: cliente,
      tipo: tipo,
      descripcion: descripcion,
    };
      this.clientes.push(heroe);
    }
    eliminarCliente(indice: number): void {
      this.clientes.splice(indice, 1);
    }
    
}



export interface Cliente{
  codRegistro: string;
  fecha: string;
  cliente: string;
  tipo: string;
  descripcion: string;
}
