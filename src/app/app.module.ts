import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CriptoTrilhoComponent } from './cripto-trilho/cripto-trilho.component';


@NgModule({
  declarations: [
    AppComponent,
    CriptoTrilhoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
