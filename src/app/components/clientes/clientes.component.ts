import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente, HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes:Cliente[]=[]

  ngOnInit(): void{

  this.clientes = this._clientesService.getClientes();
  }

  constructor(public _clientesService:HeroesService, private router:Router){
   
  }
  
  verCliente(ob: Cliente){
    console.log(ob);
    this.router.navigate(['/cliente',this.clientes.indexOf(ob)]);
  }
}
