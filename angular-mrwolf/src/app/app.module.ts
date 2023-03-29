import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

// angular material imports in app.module.ts
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// // for compiling bug : @NgModule imports AppRoutingModule
// import { RouterModule, Routes } from '@angular/router';

//Add the imported modules to the imports array in the @NgModule decorator line 24-32
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
//     AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
