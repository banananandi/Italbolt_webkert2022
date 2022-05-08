import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  login(email: string, pw: string) {
    return this.auth.signInWithEmailAndPassword(email, pw);
  }

  signup(email: string, pw: string) {
    return this.auth.createUserWithEmailAndPassword(email, pw);
  }

  isUserLoggedIn() {
    return this.auth.user;
  }

  logout() {
    return this.auth.signOut();
  }
}
