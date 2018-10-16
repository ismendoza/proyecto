import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiciosWebService } from './servicios-web.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

    
  ],
  providers: [ServiciosWebService, AuthGuard, AuthService,
  {
    provide: LocationStrategy, useClass:HashLocationStrategy 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
