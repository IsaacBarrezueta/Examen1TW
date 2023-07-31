import { Component } from '@angular/core';
import { HeroesService, Cliente } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  clientes: Cliente[] = [];
  clienteEditarIndex: number | null = null;
  codRegistro: string = '';
  fecha: string = '';
  cliente: string = '';
  tipo: string = '';
  descripcion: string = '';

  constructor(public _clientesService: HeroesService) {
    this.clientes = this._clientesService.getClientes();
  }

  insertarClientes(): void {
    const nuevoCliente: Cliente = {
      codRegistro: this.codRegistro,
      fecha: this.fecha,
      cliente: this.cliente,
      tipo: this.tipo,
      descripcion: this.descripcion
    };

    this.clientes.push(nuevoCliente);
    this.limpiarCampos();
  }

  editarCliente(cliente: Cliente, index: number): void {
    this.clienteEditarIndex = index;
    this.codRegistro = cliente.codRegistro;
    this.fecha = cliente.fecha;
    this.cliente = cliente.cliente;
    this.tipo = cliente.tipo;
    this.descripcion = cliente.descripcion;
  }

  guardarCambios(): void {
    if (this.clienteEditarIndex !== null) {
      this.clientes[this.clienteEditarIndex].codRegistro = this.codRegistro;
      this.clientes[this.clienteEditarIndex].fecha = this.fecha;
      this.clientes[this.clienteEditarIndex].cliente = this.cliente;
      this.clientes[this.clienteEditarIndex].tipo = this.tipo;
      this.clientes[this.clienteEditarIndex].descripcion = this.descripcion;

      this.limpiarCampos();
      this.clienteEditarIndex = null;
    }
  }

  eliminarCliente(index: number): void {
    this.clientes.splice(index, 1);
  }

  private limpiarCampos(): void {
    this.codRegistro = '';
    this.fecha = '';
    this.cliente = '';
    this.tipo = '';
    this.descripcion = '';
  }
}
