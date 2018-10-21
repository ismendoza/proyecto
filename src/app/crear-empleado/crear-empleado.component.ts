import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { TipoEmpleado } from '../modelos';
import { ServiciosWebService } from '../servicios-web.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  crearEmpleadoForm: FormGroup;
  tiposEmpleado: TipoEmpleado[];
  respuesta = '';
  constructor( private fb: FormBuilder, private servicios: ServiciosWebService) {
    this.crearEmpleadoForm = this.fb.group({
      nombre: '',
      apellido: '',
      direccion: '',
      dpi: '',
      nit: '',
      licencia: '',
      telefono: '',
      tipoEmpleado: ''
      });
   }

  ngOnInit() {
    this.getTipoEmpleado();
  }
  getTipoEmpleado(): void {
    this.servicios.getTipoEmpleado()
      .subscribe(proc => this.tiposEmpleado = proc);
  }
  submit(formulario): void{
    console.log(formulario);
      this.servicios.crearEmpleado(formulario).subscribe(
        response=>{
          this.respuesta = response['respuesta'];
         
          if(this.respuesta == "Se ha creado el registro"){
            console.log(response['respuesta']);
            alert(this.respuesta);
            this.crearEmpleadoForm.reset();
          }
          console.log(response);
          
        }
      );
  }

}
