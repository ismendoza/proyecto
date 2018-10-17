import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;
  usermsg = '';
  constructor( private fb: FormBuilder, public router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      usuario: '',
      password: ''
      });
   }

   login(){
    this.authService.log(this.loginForm.get('usuario').value, this.loginForm.get('password').value)
    .subscribe(response => {
      this.usermsg = response;
        
        
      
    });
  }

  ngOnInit() {
  }

}
