import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cripto-trilho',
  templateUrl: './cripto-trilho.component.html',
  styleUrls: ['./cripto-trilho.component.css']
})
export class CriptoTrilhoComponent implements OnInit {

  trilha = '';
  palavraNormal: String = '';
  palavraEncriptada: any;
  nivel: number ;

  constructor() {
   }

  ngOnInit() {

  }
  preencheNivel(evento: KeyboardEvent){
    this.nivel =  parseInt((<HTMLInputElement>evento.target).value);
  }
  preencheString(evento: KeyboardEvent){
    this.palavraNormal =  (<HTMLInputElement>evento.target).value;
  }
  apaga(){
    this.trilha = '';
  }
  encripta () {
    this.apaga();
    let aEncriptar = this.palavraNormal;
    let nivel:number = this.nivel;
    
    for(let i = 0 ; i < nivel ; i++ ){
      let cont = i;
      for (let index = cont; index <= aEncriptar.length; index+=nivel) {
        this.trilha += ((aEncriptar.charAt(index)));
        console.log((aEncriptar.charAt(index)));
        cont++;
      }
    }
    this.palavraEncriptada = this.trilha;
    console.log(this.palavraEncriptada)
  }
  decripta(chave){
    
  }
}
