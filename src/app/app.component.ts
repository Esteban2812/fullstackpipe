import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'app';
	fecha = new Date()
	nombre = "fullstack"

	textoABuscar = "asesino"

	 libros = [
		 {autor: "Patrick Suskind", titulo: "el perfume", anno:2000, sinopsis: "narra la historia de un asesino que mataba mujeres para robarles su esencia y crear perfumes."},
		 {autor: "José María Arguedas", titulo: "el sexto", anno:1980, sinopsis: "novela basada en un transexual llamado rosita. Narra sus vivensicas edentro de la cárcel llamada el sexto."},
		 {autor: "Mario Vargas Llosa", titulo: "Pantaleon y las visitadoras", anno:1975, sinopsis: "describe el servicios visitadoras creadas para la tropa ubicada en lugares fronterizos y alejados."},
		 {autor: "Anonimo", titulo: "El lazarillo de tormes", anno:1600, sinopsis: "describe las aventuras y las desdichas de un niño probre cuya madre lo entrega a un ao para que lo cuilde y lo alimente. El libro cuenta las anécdotas que pasó con 3 amos."}
	 ]


}
