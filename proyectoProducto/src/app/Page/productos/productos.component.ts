import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { Producto } from '../../Modelos/producto.model';
import { CarritoService } from '../../servicio/carrito.service';
import { FavoritosComponent } from '../../Compartidos/favoritos/favoritos.component';
import { FavoritosService } from '../../servicio/favoritos.service';


@Component({
  selector: 'app-productos',
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
   // Constructor donde inyectamos el servicio del carrito
constructor(private carritoService: CarritoService, private favoritoService: FavoritosService) {}

// Método para agregar un producto al carrito
agregar(producto: Producto) {
  // Llama al método del servicio para agregar el producto al carrito
  this.carritoService.agregarAlCarrito(producto);

  // Muestra un mensaje de confirmación al usuario
  alert('Producto agregado al carrito');
 
}

// Método para agregar un producto a favoritos
agregarFavorito(producto: Producto) {
  // Llama al método del servicio para agregar el producto a favoritos
  this.favoritoService.agregarAFavorito(producto);

  // Muestra un mensaje de confirmación al usuario
  alert('Producto agregado a favoritos');
}

  Productos: Producto[]= [
    {
      id: 1,
      descripcion: "La mejor manzana de la patagonia",
      nombre: "Manzana",
      precio: 300,
      img: "https://th.bing.com/th/id/R.c6ef1c7c177ba0e205add120ea606bf5?rik=v3wGpu4bFxqMtA&riu=http%3a%2f%2fwww.ibereco.com%2fimagen%2fcompleta%2f0%2f0%2fmanzana-roja-unidad_1.jpg&ehk=YYUtD01LCi9sJPys3KZ4sp83JmIlX0wQrzg79GZBO3w%3d&risl=&pid=ImgRaw&r=0",
      disponibilidad: true,
      cantidad: 20
    },
    {
      id: 2,
      descripcion: "La mejor banana de la region",
      nombre: "Banana",
      precio: 500,
      img: "https://th.bing.com/th/id/OIP.4SS14J9OyyhuvbSw-tvEYwHaFj?rs=1&pid=ImgDetMain",
      disponibilidad: true,
      cantidad: 20
    },
    {
      id: 3,
      descripcion: "La mejor pera de la ciudad",
      nombre: "Pera",
      precio: 800,
      img: "https://th.bing.com/th/id/OIP.REw4HkHTBpqMwF7qKzoMawHaKL?rs=1&pid=ImgDetMain",
      disponibilidad: true,
      cantidad: 20
    },
    {
      id: 4,
      descripcion: "La mejor palta del mundo",
      nombre: "Palta",
      precio: 1000,
      img: "https://th.bing.com/th/id/OIP.yFGYMDr7-gh_IkW1elfwkQHaGW?rs=1&pid=ImgDetMain",
      disponibilidad: true,
      cantidad: 10
    }
  ];
  
}
