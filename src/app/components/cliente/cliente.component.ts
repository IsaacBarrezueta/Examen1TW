import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  cliente:any={};
  constructor(private activatedRoute: ActivatedRoute, private _clienteService:HeroesService){
    this.activatedRoute.params.subscribe(params =>{
      this.cliente= _clienteService.getCliente(params['id']);
      console.log(this.cliente);
    })
  }
  ngOnInit():void{
    window.scroll(0,0);
  }
}
