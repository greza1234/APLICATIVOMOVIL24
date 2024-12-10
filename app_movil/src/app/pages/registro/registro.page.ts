import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  correo: string = '';
  password: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private toastController: ToastController,
    private router: Router 
  ) {}

  async login() {
    if (!this.correo || !this.password) {
      this.presentToast('Por favor, ingrese su correo y contraseña.');
      return;
    }

    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(
        this.correo,
        this.password
      );

      if (userCredential.user) {
        this.presentToast('Inicio de sesión exitoso.');

        
        this.router.navigate(['/home']); 

      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      this.presentToast('Correo o contraseña incorrectos.');
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
