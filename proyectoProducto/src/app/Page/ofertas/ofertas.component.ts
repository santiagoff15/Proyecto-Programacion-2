import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Producto } from '../../Modelos/producto.model';
import { CarritoService } from '../../servicio/carrito.service';

@Component({
  selector: 'app-ofertas',
  imports: [CommonModule, RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
  Productos: Producto[]= [
    {
      id: 1,
      descripcion: "La mejor sandia de la patagonia",
      nombre: "Sandia",
      precio: 800,
      img: "https://tse3.mm.bing.net/th/id/OIP.QF4WITnd-5FATIX73HocnwHaHa?rs=1&pid=ImgDetMain",
      disponibilidad: true,
      cantidad: 20
    },
    {
      id: 2,
      descripcion: "La mejor mandarina de la region",
      nombre: "Mandarina",
      precio: 500,
      img: "https://1.bp.blogspot.com/-iVolJIu6ebQ/TtY6m6nwGKI/AAAAAAAAAig/D2jvqzWPd_s/s1600/clementina.jpg",
      disponibilidad: true,
      cantidad: 20
    },
    {
      id: 3,
      descripcion: "El mejor pomelo de la ciudad",
      nombre: "Pomelo",
      precio: 800,
      img: "https://healthbenefitstimes.com/9/uploads/2012/12/Red-Pomelo.jpg",
      disponibilidad: true,
      cantidad: 20
    },
    {
      id: 4,
      descripcion: "El mejor kiwi del mundo",
      nombre: "Kiwi",
      precio: 1000,
      img: "https://tse4.mm.bing.net/th/id/OIP.8t3v57tjo4fnkjDRie-wpgHaE9?rs=1&pid=ImgDetMain",
      disponibilidad: true,
      cantidad: 10
    },
    {
      id: 5,
      descripcion: "La mejor naranja del mundo",
      nombre: "Naranja",
      precio: 300,
      img: "https://tse3.mm.bing.net/th/id/OIP.6BjoCEER5Dfxv_6eFQXu4AHaGr?rs=1&pid=ImgDetMain",
      disponibilidad: true,
      cantidad: 10
    }
  ];
  // Constructor donde inyectamos el servicio del carrito
  constructor(private carritoService: CarritoService) {}
  
  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    // Llama al método del servicio para agregar el producto al carrito
    this.carritoService.agregarAlCarrito(producto);
  
    // Muestra un mensaje de confirmación al usuario
    alert('Producto agregado al carrito');
}
}

