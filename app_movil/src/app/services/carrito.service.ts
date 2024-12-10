import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private firestore: AngularFirestore) { }

  
  agregarAlCarrito(producto: any) {
    const carritoRef = this.firestore.collection('carrito');  
    return carritoRef.add(producto);  
  }

  
  obtenerCarrito(): Observable<any[]> {
    return this.firestore.collection('carrito').valueChanges();  
  }

  
  eliminarDelCarrito(id: string) {
    return this.firestore.collection('carrito').doc(id).delete();  
  }
}
