import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
  
  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    currentUser: any;
    constructor() { }
  
    onRegister(user: any) {
  
      const currentUser = JSON.stringify(
        { name: user.name, email: user.email, password: user.password }
      );

      this.setUser(currentUser);  
    
    }
  
    onLogin(user: any) {
  
      const currentUser = JSON.stringify(
        { email: user.email, password: user.password }
      );  
      this.setUser(currentUser);
    }
  
    onLogout() {
        this.removeUser();        
    }
  
    setUser(user: any): void {
      return localStorage.setItem('currentUser', user);
    }
  
    getUser(): string {
      return localStorage.getItem('currentUser');
    }
    
    removeUser(): void {
        return localStorage.removeItem('currentUser');
    }
  
    isAuthenticated(): boolean {
      // get the token
      const user: any = this.getUser();
      if (user) {
        return true;
      }
      return false;
    }
  
    
  }