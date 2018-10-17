import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { AuthGuard } from './auth.guard';

const routes: Routes =[

  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent },
  { path: 'registroCliente', canActivate: [AuthGuard], component: RegistroClienteComponent }
  
  
  
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
