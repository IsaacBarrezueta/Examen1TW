import { Pipe, PipeTransform } from '@angular/core';
import { Cliente, HeroesService } from '../service/heroes.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Cliente[], arg: string): Cliente[] {
    console.log(arg);
   const result =[];
    for(const cliente of value){
      if(cliente.cliente.toLocaleLowerCase().indexOf(arg.toLocaleLowerCase())>-1 || cliente.codRegistro.toLocaleLowerCase().indexOf(arg.toLocaleLowerCase())>-1  ){
          result.push(cliente);
      }
    }
    if (result.length==0)
      return value;
    return result ;
  }
}
