import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';  
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of } from 'rxjs';  
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<any | null>; 

  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {
    
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          
          return this.firestore.collection('users').doc(user.uid).valueChanges();
        } else {
          
          return of(null);
        }
      })
    );
  }

  
  registerUser(
    nombre: string,
    apellido: string,
    correo: string,
    usuario: string,
    password: string
  ): Promise<any> {
    return this.afAuth
      .createUserWithEmailAndPassword(correo, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          return this.firestore.collection('users').doc(user.uid).set({
            nombre,
            apellido,
            correo,
            usuario,
          });
        }
        return Promise.reject('Error al crear el usuario.');
      })
      .catch((error) => {
        console.error('Error al registrar usuario:', error);
        throw error;
      });
  }

  
  login(correo: string, password: string): Promise<any> {
    return this.afAuth
      .signInWithEmailAndPassword(correo, password)
      .catch((error) => {
        console.error('Error al iniciar sesión:', error);
        throw error;
      });
  }

  
  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  
  getCurrentUser(): Observable<any> {
    return this.afAuth.authState; 
  }

  
  isAuthenticated(): Promise<boolean> {
    return this.afAuth.currentUser.then((user) => !!user);
  }
}
