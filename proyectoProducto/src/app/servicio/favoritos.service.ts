import { Injectable } from '@angular/core';
import { Producto } from '../Modelos/producto.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  // Se crea un BehaviorSubject privado que almacena un arreglo de productos con su cantidad.
    private favoritoSubject = new BehaviorSubject<Producto []>([]);
    
    // Se expone el BehaviorSubject como observable para que otros componentes puedan suscribirse y reaccionar a los cambios.
    favorito$ = this.favoritoSubject.asObservable();
  
    // Método para agregar un producto al carrito.
    agregarAFavorito(producto: Producto) {
      console.log('Agregando a favoritos:', producto.nombre); // <-- Agregalo
      // Obtiene el valor actual del carrito.
      const favoritos = this.favoritoSubject.getValue();
      // Busca si el producto ya está en el carrito.
      const encontrado = favoritos.find(p => p.id === producto.id);
  
      if (encontrado) {
        // Si el producto ya existe, incrementa la cantidad en 1.
        encontrado.cantidad++;
      } else {
        // Si el producto no existe, lo agrega al carrito con cantidad 1.
        this.favoritoSubject.next([...favoritos,  producto]);
      }
    }
  
    // Método para eliminar un producto del carrito según su id.
    eliminarDeFavorito(productoId: number) {
      // Filtra los productos, dejando fuera el que tenga el id especificado.
      const actualizados = this.favoritoSubject.getValue().filter(p => p.id !== productoId);
      // Actualiza el carrito con la nueva lista de productos.
      this.favoritoSubject.next(actualizados);
    }
  
    // Método para vaciar completamente el carrito.
    vaciarFavorito() {
      // Establece el carrito como un arreglo vacío.
      this.favoritoSubject.next([]);
    }
}
