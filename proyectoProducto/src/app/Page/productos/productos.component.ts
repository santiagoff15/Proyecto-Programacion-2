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
      descripcion: "Automático 34mm, Ceramica negra",
      nombre: "Audemars Piguet Royal Oak",
      precio: 70700,
      img: "https://dynamicmedia.audemarspiguet.com/is/image/audemarspiguet/watch-896?size=568,0&dpr=off&fmt=avif-alpha&dpr=off",
      disponibilidad: true,
      cantidad: 1
    },
    {
      id: 2,
      descripcion: "Tourbillon Volante Automático",
      nombre: "Audemars Piguet Royal Oak",
      precio: 295.000,
      img: "https://dynamicmedia.audemarspiguet.com/is/image/audemarspiguet/watch-1031?size=568,0&dpr=off&fmt=avif-alpha&dpr=off",
      disponibilidad: true,
      cantidad: 1
    },
    {
      id: 3,
      descripcion: "Tamaño pequeño, movimiento de cuarzo, acero, brazalete de metal y correa de piel intercambiables",
      nombre: "Cartier Santos",
      precio: 6600,
      img: "https://www.cartier.com/variants/images/46376663162922522/img1/w1242_tpadding12.jpg",
      disponibilidad: true,
      cantidad: 1
    },
    {
      id: 4,
      descripcion: "41 mm, Oro Moonshine™ con Oro Moonshine™",
      nombre: "Omega Seamaster Aqua Terra 150M",
      precio: 7000,
      img: "https://odd.omegawatches.com/laravel/storage/images/800x1100-agGBMI4QVanCdfx6mYhKSjl5L11FEm5AMjkChoUJ-2000x2000.png",
      disponibilidad: true,
      cantidad: 1
    },
    {
      id: 5,
      descripcion: "Automático 34mm, Ceramica blanca",
      nombre: "Audemars Piguet Royal Oak",
      precio: 65000,
      img: "https://dynamicmedia.audemarspiguet.com/is/image/audemarspiguet/watch-966?size=568,0&dpr=off&fmt=avif-alpha&dpr=off",
      disponibilidad: true,
      cantidad: 1
    },
    {
      id: 6,
      descripcion: 'Un condensado del "Arte de la Fusión" de Hublot, para quienes comparten ese mismo espíritu independiente. ',
      nombre: "Hublot Gold Diamonds",
      precio: 27800,
      img: "https://www.evejoyeria.com/storage/product_images/desktop/361.PX.1280.RX.1104.jpg",
      disponibilidad: true,
      cantidad: 1
    }
  ];
  
}
