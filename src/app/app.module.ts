import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AlbumComponent } from './album/album.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { CommonModule } from '@angular/common';
import { AlbumPipe } from './album/album.pipe';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule, 
    AngularMaterialModule,
    CommonModule,
  ],
  declarations: [
    AppComponent, 
    AlbumComponent, 
    UsersComponent,
    AlbumPipe,
  ],
  bootstrap: [AppComponent],
  providers: [ApiService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
