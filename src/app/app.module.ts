import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ServiciosWebService } from './servicios-web.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule, MatMenu} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { ProductoComponent } from './producto/producto.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistroClienteComponent,
    LoginComponent,
    InicioComponent,
    CrearEmpleadoComponent,
    ProductoComponent,
    CrearClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule
    

    




    
  ],
  providers: [ServiciosWebService, AuthGuard, AuthService,
  {
    provide: LocationStrategy, useClass:HashLocationStrategy 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
