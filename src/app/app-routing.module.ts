import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { ProductoComponent } from './producto/producto.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';

const routes: Routes =[
  //{ path: '', component: AppComponent,pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: InicioComponent, canActivate:[AuthGuard] },
  { path: 'registroCliente', component: RegistroClienteComponent },
  { path: 'crearempleado', component: CrearEmpleadoComponent, canActivate:[AuthGuard] },
  { path: 'crearproducto', component: ProductoComponent, canActivate:[AuthGuard]},
  { path: 'crearcliente', component: CrearClienteComponent, canActivate:[AuthGuard]}
  
  
  
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
