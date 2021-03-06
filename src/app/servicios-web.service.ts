import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TipoEmpleado } from './modelos';

@Injectable({
  providedIn: 'root'
})
export class ServiciosWebService {

UrlTipoEmpleado = 'http://localhost:7799/serviciosweb/tipo_empleado.php/';
UrlGuradarEmpleado = 'http://localhost:7788/empleado';
UrlGuradarProducto = 'http://localhost:7788/producto';
UrlGuradarCliente = 'http://localhost:7788/cliente';
  constructor(private http: HttpClient) { }

//Obtiene lista de tipos de empleado
getTipoEmpleado(): Observable<TipoEmpleado[]>{
  return this.http.get<TipoEmpleado[]>(this.UrlTipoEmpleado);
}
//LLama al servicio web para guardar en la base de datos el empleado
crearEmpleado(formulario){
    console.log(formulario);
    return this.http.post(this.UrlGuradarEmpleado, formulario);
  }
  crearProducto(formulario){
    console.log(formulario);
    return this.http.post(this.UrlGuradarProducto, formulario);
  }
  crearCliente(formulario){
    console.log(formulario);
    return this.http.post(this.UrlGuradarCliente, formulario);
  }

}