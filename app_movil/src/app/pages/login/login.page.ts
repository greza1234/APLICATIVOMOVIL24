import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  password: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private toastController: ToastController,
    private router: Router
  ) {}

  async register() {
  
    if (!this.correo || !this.password || this.password.length < 6) {
      this.presentToast('Por favor, verifica los datos ingresados.');
      return;
    }

    try {
      
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(
        this.correo,
        this.password
      );

      
      if (userCredential.user) {
        await this.afs.collection('users').doc(userCredential.user.uid).set({
          nombre: this.nombre,
          apellido: this.apellido,
          correo: this.correo,
        });

        this.presentToast('Usuario registrado exitosamente.');

        
        this.router.navigate(['/login']); 
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      this.presentToast('Error al registrar el usuario. Por favor, intenta nuevamente.');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
