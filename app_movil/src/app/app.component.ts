import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isAuthenticated: boolean = false; 

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
    
    this.checkAuthState();
  }

  private checkAuthState() {
    this.afAuth.onAuthStateChanged(user => {
      this.isAuthenticated = !!user; 

      
      if (!user) {
        this.router.navigate(['/home']);
      }
    });
  }
}
