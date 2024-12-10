import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IonContent, ToastController } from '@ionic/angular'; 
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-drones',
  templateUrl: './drones.page.html',
  styleUrls: ['./drones.page.scss'],
})
export class DronesPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content!: IonContent;
  dronesdb$: Observable<any[]> = new Observable();

  constructor(
    private firestore: AngularFirestore,
    private carritoService: CarritoService,
    private toastController: ToastController 
  ) {}

  ngOnInit() {
    this.dronesdb$ = this.firestore.collection('dronesdb').valueChanges({ idField: 'id' });
  }

  async agregarAlCarrito(producto: any) {
    try {
      await this.carritoService.agregarAlCarrito(producto);
      
      const toast = await this.toastController.create({
        message: `Producto agregado correctamente al carrito.`,
        duration: 2000,  
        position: 'middle',  
        color: 'success',  
      });
      toast.present();
    } catch (error) {
      const toast = await this.toastController.create({
        message: 'Error al agregar el producto al carrito.',
        duration: 2000,
        position: 'bottom',
        color: 'danger',  
      });
      toast.present();
    }
  }

  toggleFavorito(producto: any) {
    producto.favorito = !producto.favorito;
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }
}
