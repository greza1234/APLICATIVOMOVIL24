import { Component, OnInit, ViewChild} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { Observable } from 'rxjs'; 
import { IonContent } from '@ionic/angular'; 


@Component({
  selector: 'app-construccion',
  templateUrl: './construccion.page.html',
  styleUrls: ['./construccion.page.scss'],
})
export class ConstruccionPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content!: IonContent;
  construccion$: Observable<any[]> = new Observable(); // Observable para manejar la lista de productos

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    // Obtiene la colección 'productos' de Firestore y la asigna al Observable
    this.construccion$ = this.firestore.collection('construccion').valueChanges({ idField: 'id' });
    this.construccion$.subscribe(productos => {
      console.log(productos); // Aquí puedes verificar si las URLs de 'imagen' son correctas
    });
  }

  // Método para agregar un producto al carrito (puedes ajustar esta lógica según tu aplicación)
  agregarAlCarrito(producto: any) {
    console.log(`Producto agregado al carrito: ${producto.nombre}`);
    alert('Producto agregado al carrito: ' + producto.nombre);
  }

  // Método para alternar el estado de favorito del producto
  toggleFavorito(producto: any) {
    // Aquí podrías actualizar Firestore para reflejar el cambio, pero por ahora se queda como ejemplo local
    producto.favorito = !producto.favorito;
    console.log(`${producto.nombre} ahora es favorito:`, producto.favorito);
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }
}
