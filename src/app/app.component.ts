import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Finca La Primavera';
  isLoggedIn$: Observable<boolean>;
  isLoggedIn2$: Observable<boolean>;
  
  constructor(public authService: AuthService){}
  logout(){
    this.authService.logout();    
    
  }
  setUser(){
    return localStorage.getItem('username');
  }
  ngOnInit(){
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.isLoggedIn2$ = this.authService.isLoggedIn2;
  }
  
}
