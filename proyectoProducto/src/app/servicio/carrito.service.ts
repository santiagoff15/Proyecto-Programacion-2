import { Injectable } from '@angular/core';
import { Producto } from '../Modelos/producto.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
// Se crea un BehaviorSubject privado que almacena un arreglo de productos con su cantidad.
  private carritoSubject = new BehaviorSubject<{ producto: Producto; cantidad: number }[]>([]);
  
  // Se expone el BehaviorSubject como observable para que otros componentes puedan suscribirse y reaccionar a los cambios.
  carrito$ = this.carritoSubject.asObservable();

  // Método para agregar un producto al carrito.
  agregarAlCarrito(producto: Producto) {
    // Obtiene el valor actual del carrito.
    const productos = this.carritoSubject.getValue();
    // Busca si el producto ya está en el carrito.
    const encontrado = productos.find(p => p.producto.id === producto.id);

    if (encontrado) {
      // Si el producto ya existe, incrementa la cantidad en 1.
      encontrado.cantidad++;
    } else {
      // Si el producto no existe, lo agrega al carrito con cantidad 1.
      this.carritoSubject.next([...productos, { producto, cantidad: 1 }]);
    }
  }

  // Método para eliminar un producto del carrito según su id.
  eliminarDelCarrito(productoId: number) {
    // Filtra los productos, dejando fuera el que tenga el id especificado.
    const productos = this.carritoSubject.getValue().filter(p => p.producto.id !== productoId);
    // Actualiza el carrito con la nueva lista de productos.
    this.carritoSubject.next(productos);
  }

  // Método para vaciar completamente el carrito.
  vaciarCarrito() {
    // Establece el carrito como un arreglo vacío.
    this.carritoSubject.next([]);
  }

  //Metodo par actualizar la cantidad de un producto en el carrito
  actualizarCantidad(productoId: number, nuevaCantidad: number) {
    // Recoremos el carrito y actualizamos la cantidad del producto con el ID dado
    const productos = this.carritoSubject.getValue().map(item => {
      if (item.producto.id === productoId){
        //Retornamos una copia del producto con la nueva contidad
      return {...item, cantidad: nuevaCantidad};
      }
      return item;

    });
    //Emitimos el nuevo estado del carrito
    this.carritoSubject.next(productos);
  }

  //Metodo para obtener los productos del carrito como un arreglo
  obtenerProductos(): { producto: Producto; cantidad: number}[]{
    return this.carritoSubject.getValue();
  }

  //Metodo para calcular el total a pagar (precio * cantidad de cada producto)
  obtenerTotal(): number {
const productos = this.carritoSubject.getValue();
//Usamos reduce para sumar los subtotales de cada producto
return productos.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
  }
 
}
