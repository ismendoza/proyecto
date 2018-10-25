import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ServiciosWebService } from '../servicios-web.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  crearProductoForm: FormGroup;
    respuesta = '';
  constructor( private fb: FormBuilder, private servicios: ServiciosWebService) { }

  ngOnInit() {
    this.crearProductoForm = this.fb.group({
      descripcion: ''
      });
  }
  submit(formulario): void{
    console.log(formulario);
      this.servicios.crearProducto(formulario).subscribe(
        response=>{
          //this.respuesta = response['respuesta'];
          this.respuesta = "Se ha creado el producto";
         
          if(response['respuesta'] == true){
            console.log(response['respuesta']);
            alert(this.respuesta);
            this.crearProductoForm.reset();
          }
          else{
            alert("No se ha podido crear el producto");
          }
          console.log(response);
          
        }
      );
  }

}
