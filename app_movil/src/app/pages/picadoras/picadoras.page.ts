import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IonContent, ToastController } from '@ionic/angular'; 
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-picadoras',
  templateUrl: './picadoras.page.html',
  styleUrls: ['./picadoras.page.scss'],
})
export class PicadorasPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content!: IonContent;
  picadorasdb$: Observable<any[]> = new Observable();

  constructor(
    private firestore: AngularFirestore,
    private carritoService: CarritoService,
    private toastController: ToastController 
  ) {}

  ngOnInit() {
    this.picadorasdb$ = this.firestore.collection('picadorasdb').valueChanges({ idField: 'id' });
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
