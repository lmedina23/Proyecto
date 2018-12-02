import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto.model';

@Injectable()
export class guardarservicio {

	constructor(private http: HttpClient){

	}
	guardarproducto(producto: Producto){
		return this.http.post('/api/user/newproducto',{
			nombre : producto.nombre,
			descripcion : producto.descripcion,
			precio: producto.precio,
			categoria : producto.categoria,
			detalles : producto.detalles,
			imagen : producto.imagen,
			vendedor: producto.vendedor,
			rutaimagen: producto.rutaimagen,          
		})
	}

}