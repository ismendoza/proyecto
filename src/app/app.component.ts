import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Finca La Primavera';
  constructor(public authService: AuthService){}
  logout(){
    this.authService.logout();    
  }
  setUser(){
    return localStorage.getItem('username');
  }
  
}
