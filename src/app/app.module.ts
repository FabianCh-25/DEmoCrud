import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PetComponent } from './component/pet/pet.component';
import { PetListarComponent } from './component/pet/pet-listar/pet-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { PetInsertarComponent } from './component/pet/pet-insertar/pet-insertar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [AppComponent, PetComponent, PetListarComponent, PetInsertarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule, // se agrega
    FormsModule, //se agrega
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
MatButtonModule


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
