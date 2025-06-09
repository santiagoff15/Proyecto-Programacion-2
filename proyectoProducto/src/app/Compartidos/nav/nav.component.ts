import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../Modelos/producto.model';

@Component({
  selector: 'app-nav',
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
// Variable que almacena la cantidad total de productos en el carrito
cantidadProductos: number = 0;

// Constructor donde inyectamos el servicio del carrito
constructor(private carritoService: CarritoService) {}

// Método que se ejecuta al inicializar el componente
ngOnInit(): void {
  // Nos suscribimos al observable del carrito para actualizar la cantidad total de productos
  this.carritoService.carrito$.subscribe((productos: { producto: Producto, cantidad: number }[]) => {
    // Calcula el total de productos sumando las cantidades de cada producto en el carrito
    this.cantidadProductos = productos.reduce((total, item) => total + item.cantidad, 0);
  });
}

// Método que se ejecuta cuando el usuario hace clic en el ícono del carrito
onCarritoClick() {
  console.log('Carrito clicked'); // Muestra un mensaje en la consola como respuesta al clic
}
}
