import { Component, OnInit } from '@angular/core';
import { Producto } from '../../Modelos/producto.model';
import { FavoritosService } from '../../servicio/favoritos.service';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../servicio/carrito.service';

@Component({
  selector: 'app-favoritos',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit{
 // Arreglo que guarda los productos en el carrito, con su cantidad
  productosEnFavoritos: Producto[] = [];

  // Inyectamos el servicio de favoritos en el constructor
  constructor(private favoritoService: FavoritosService, private carritoService: CarritoService) {}

  // Método que se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    // Nos suscribimos al observable del carrito para mantener actualizada la lista de productos
    this.favoritoService.favorito$.subscribe((productos) => {
      this.productosEnFavoritos = productos;
    });
  }

  // Método para eliminar completamente un producto de favoritos
  eliminarFavorito(productoId: number) {
    this.favoritoService.eliminarDeFavorito(productoId);
  }

  // Método para vaciar todo el favoritos
  vaciarFavorito() {
    this.favoritoService.vaciarFavorito();
  }
}
