import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, delay, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private loggedIn2= new BehaviorSubject<boolean>(true);
  username: string;
  //UrlCheckUser = 'http://localhost:7799/ServiciosWeb/checkUser.php/';
  UrlCheckUser = 'http://localhost:7788/checkUser';
  constructor(private http: HttpClient, private router: Router) { }

  log(usuario, password){
    console.log(usuario, password);
    return this.http.post(this.UrlCheckUser,{'username': usuario, 'password': password})
    .pipe(
      map( response=>{
        if(response){
          this.loggedIn.next(true);
          this.loggedIn2.next(false);
          sessionStorage.setItem('mendoza', JSON.stringify(response));
          this.router.navigate(['inicio']);
          this.username = usuario;
          localStorage.setItem('username', usuario);
          console.log(this.isLoggedIn);
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
    this.loggedIn.next(false);
    this.loggedIn2.next(true);
    localStorage.removeItem('username');
    this.router.navigate(['/']);
    //console.log(this.isLoggedIn);
  }
  getUsuario(){
    return this.username;
  }

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }
  get isLoggedIn2(){
    return this.loggedIn2.asObservable();
  }
}
