import { Component} from '@angular/core';
import { Producto } from '../models/producto.model';
import { Router } from '@angular/router';
import { guardarservicio } from './guardar.service';
//import { prod } from '';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers: [ guardarservicio]
})

export class ProductoComponent {
 public producto : Producto;

  constructor(private guardarservicio: guardarservicio, private router: Router) { 
    this.producto = new Producto();
  }
  guardarproducto(){
    if(this.producto.nombre && this.producto.descripcion){
      this.guardarservicio.guardarproducto(this.producto).subscribe(res =>{
        console.log('response is ', res)
        alert('Producto Guardado');
      })
   
    } else {
      alert('Es Requerido Nombre & Descripcion');
    }
  }   
}
