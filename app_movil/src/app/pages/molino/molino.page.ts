import { Component, OnInit, ViewChild} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { Observable } from 'rxjs'; 
import { IonContent } from '@ionic/angular'; 


@Component({
  selector: 'app-molino',
  templateUrl: './molino.page.html',
  styleUrls: ['./molino.page.scss'],
})
export class MolinoPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content!: IonContent;
  molinodb$: Observable<any[]> = new Observable(); // Observable para manejar la lista de productos

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    // Obtiene la colección 'productos' de Firestore y la asigna al Observable
    this.molinodb$ = this.firestore.collection('molinodb').valueChanges({ idField: 'id' });
    this.molinodb$.subscribe(productos => {
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
