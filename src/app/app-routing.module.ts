import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  {
    path: 'main',
    component: MainComponent
  }, 
  {path:'busqueda', component:BusquedaComponent},
  {path: 'clientes', component:ClientesComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/register']))
  },
  {path: 'cliente/:id', component:ClienteComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/register']))
  },
  {path: 'formulario', component:FormularioComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/register']))
  },
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
