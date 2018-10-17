import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: Boolean;
  username: string;
  UrlCheckUser = 'http://localhost:7799/ServiciosWeb/checkUser.php/';
  constructor(private http: HttpClient, private router: Router) { }

  log(usuario, password){
    return this.http.post(this.UrlCheckUser,{'username': usuario, 'password': password})
    .pipe(
      map( response=>{
        if(response){
          sessionStorage.setItem('mendoza', JSON.stringify(response));
          this.router.navigate(['inicio']);
          this.username = usuario;
          localStorage.setItem('username', usuario);
          return JSON.stringify(response);
          
        }
        else{
          this.router.navigate(['']);
          return JSON.stringify({'response': 'NO EXISTE EL USUARIO'});
        }
      })
    );
  }


  logout(): void{
    sessionStorage.removeItem('mendoza');
    this.isLoggedIn = false;
    localStorage.removeItem('username');
    this.router.navigate(['']);
    //console.log(this.isLoggedIn);
  }
  getUsuario(){
    return this.username;
  }

}
