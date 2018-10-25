import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ServiciosWebService } from '../servicios-web.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  
  crearClienteForm: FormGroup;
  respuesta = '';
  constructor( private fb: FormBuilder, private servicios: ServiciosWebService) {
    this.crearClienteForm = this.fb.group({
      nombre: '',
      apellido: '',
      direccion: '',
      nit: '',
      telefono: '',
      email: '',
      empresa: ''
      });
   }

  ngOnInit() {
  }
  submit(formulario): void{
    console.log(formulario);
      this.servicios.crearCliente(formulario).subscribe(
        response=>{
          //this.respuesta = response['respuesta'];
          this.respuesta = "Se ha creado el cliente";
         
          if(response['respuesta'] == true){
            console.log(response['respuesta']);
            alert(this.respuesta);
            this.crearClienteForm.reset();
          }
          else{
            alert("No se ha podido crear el cliente");
          }
          console.log(response);
          
        }
      );
  }

}
