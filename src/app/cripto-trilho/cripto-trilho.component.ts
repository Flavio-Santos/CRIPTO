import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cripto-trilho',
  templateUrl: './cripto-trilho.component.html',
  styleUrls: ['./cripto-trilho.component.css']
})
export class CriptoTrilhoComponent implements OnInit {

  trilha: String;
  palavraEncriptada: String;

  constructor() {
    this.trilha = ''; 
   }

  ngOnInit() {

  }

  encripta () {
    this.palavraEncriptada = this.trilha
  }
}
