import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';  // Importa el servicio de carrito

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  productos: any[] = [];  // Lista de productos en el carrito

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.obtenerProductosCarrito();
  }

  // Obtener los productos del carrito desde Firestore
  obtenerProductosCarrito() {
    this.carritoService.obtenerCarrito().subscribe((productos) => {
      this.productos = productos.map((producto: any) => {
        return {
          ...producto,
          precio: parseFloat(producto.precio),  // Asegúrate de que el precio sea un número
          cantidad: producto.cantidad ? producto.cantidad : 1  // Establece la cantidad por defecto en 1 si no existe
        };
      });
      console.log('Productos en carrito:', this.productos);
    });
  }
  

  // Aumentar la cantidad de un producto
  aumentarCantidad(producto: any) {
    if (producto.cantidad != null) {
      producto.cantidad++;  // Aumenta la cantidad
    }
  }

  // Disminuir la cantidad de un producto
  disminuirCantidad(producto: any) {
    if (producto.cantidad != null && producto.cantidad > 1) {
      producto.cantidad--;  // Disminuye la cantidad
    }
  }

  // Eliminar un producto del carrito
  eliminarProducto(producto: any) {
    this.carritoService.eliminarDelCarrito(producto.id)
      .then(() => {
        const index = this.productos.indexOf(producto);
        if (index > -1) {
          this.productos.splice(index, 1);  // Elimina el producto del array
        }
        console.log(`${producto.nombre} eliminado del carrito`);
      })
      .catch((error) => {
        console.error('Error al eliminar producto:', error);
      });
  }
}
