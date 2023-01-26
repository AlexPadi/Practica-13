import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import {FormsModule, NgForm} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
