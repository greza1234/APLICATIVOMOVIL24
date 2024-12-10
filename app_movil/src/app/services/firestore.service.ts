import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  
  getProductos(): Observable<any[]> {
    return this.firestore.collection('productos').valueChanges({ idField: 'id' });
  }

  
  addToCart(data: any): Promise<void> {
    const id = this.firestore.createId(); 
    return this.firestore.collection('carrito').doc(id).set(data);
  }
}
