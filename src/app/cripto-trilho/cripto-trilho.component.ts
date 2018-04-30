import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cripto-trilho',
  templateUrl: './cripto-trilho.component.html',
  styleUrls: ['./cripto-trilho.component.css']
})
export class CriptoTrilhoComponent implements OnInit {
  //vaiaveis para encriptação
  trilha:any;
  palavraNormal: String = '';
  palavraEncriptada: any = '';
  nivel: number ;

  //variaveis para decriptar
  palavraParaDecriptar: String;
  nivelDep: number;
  palavraDecriptada: any = [];

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
  encripta () {
    let aEncriptar = this.palavraNormal;
    let nivel:number = this.nivel;
    let matrizCriptada = [];
    let pos = 0; 
    let numeroParaFor:number = this.numeroParaForFuncEnc(aEncriptar,nivel);
    //Lógica com matriz
    for(let i = 0 ; i <= nivel ; i++){
      pos = 0;
      let tempArray = [];
      for(let j = 0 ; j <= aEncriptar.length ; j+=nivel){
        if(aEncriptar.charAt(j+i)!= undefined && aEncriptar.charAt(i+j+nivel) != undefined && aEncriptar.charAt(j+i)!= ''){
          //console.log(aEncriptar.charAt(j+i),j);
          //matrizCriptada[i][pos]= aEncriptar.charAt(j+i);
          tempArray[pos]= aEncriptar.charAt(j+i);
          pos++;
        }
        matrizCriptada[i] = tempArray;

      }
    }

    //Lógica com array 
    // for(let i = 0 ; i < nivel ; i++ ){
    //   let cont = i;
    //   for (let index = cont; index <= aEncriptar.length; index+=nivel) {
    //     this.trilha += ((aEncriptar.charAt(index)));
    //     console.log((aEncriptar.charAt(index)));
    //     cont++;
    //   }
    // }
    // this.palavraEncriptada = this.trilha;
    // console.log(this.palavraEncriptada)
    this.formaPalavra(matrizCriptada, nivel);
  }
  formaPalavra(array,chave){
    this.palavraEncriptada = '';
    for(let i =0 ; i < array.length-1 ; i++){
      for(let j = 0 ; j<array[i].length ; j++){
        this.palavraEncriptada += array[i][j];
      }

    }
  }
  numeroParaForFunc(frase, nivel):number{
    if(frase.length%nivel == 0){
      return frase.length / nivel;
    }return (frase.length / nivel) + 1;
  }

  numeroParaForFuncEnc(frase, nivel):number{
    if(frase.length%nivel == 0){
      return frase.length / nivel;
    }
    while(frase.length%nivel != 0){
      frase = this.acrescentaCaracter(frase);
    }
    return frase;
  }
  acrescentaCaracter(frase){
    frase += String.fromCharCode(Math.floor((Math.random() * (122 - 97) + 97)))
    console.log(frase)
    return frase;
  }

  verificaVazio(){
    let palavraParaDecriptar: String = this.palavraParaDecriptar;
    if(this.palavraParaDecriptar == undefined){
      alert(this.palavraParaDecriptar);
      alert('vazio ou indefinido')
      return false;
    }
    return true;
  }

  decripta(){
    let validaCaracter: Boolean = this.verificaVazio();;
    let aDecriptar = this.palavraParaDecriptar;
    let mensagem = [];
    let chave = this.nivelDep + 1;
    let paraFor = this.numeroParaForFunc(aDecriptar,this.nivelDep);
    let jFor = 0;
    
    if(validaCaracter){
      for(let i = 0 ; i < this.nivelDep ; i++){
        let tempArray=[];
        for(let j = 0 ; j < paraFor ; j++){
         // console.log(aDecriptar.charAt(jFor));
          //console.log(tempArray[j]);
          if(tempArray[j] != ''){

          }
          tempArray[j] = aDecriptar.charAt(jFor);
         // console.log(tempArray[j]);
          jFor++;
        }
        mensagem[i] = tempArray;
        console.log(mensagem[i]);
      }
    }
    // if(validaCaracter){
    //   for(let i = 0 ; i < chave ; i++){
    //     this.palavraDecriptada[i] = aDecriptar.charAt(i);
    //     console.log(this.palavraDecriptada);
    //     let temp = i+ chave;
        
    //     while(this.Validacao(temp)){
    //       this.palavraDecriptada[chave] = aDecriptar.charAt(temp);
    //       temp += chave;  
    //       console.log(this.palavraDecriptada);
    //     }
        
    //     this.palavraDecriptada += aDecriptar.charAt(temp);
    //   }

    // }
    console.log(mensagem);
    this.imprimeMensagem(mensagem,this.nivelDep,paraFor);
  }
  imprimeMensagem(array,chave,paraFor){
    this.palavraEncriptada = '';
    
    for(let i =0 ; i < paraFor ; i++){
      for(let j = 0 ; j < chave ; j++){
        if( array[j][i] != '' && array[j][i] != undefined){
          this.palavraDecriptada += array[j][i];
        }
      }

    }
  }
  pegaFraseEncriptada(evento: KeyboardEvent){
    this.palavraParaDecriptar =  (<HTMLInputElement>evento.target).value;
  }
  pegaNivelDep(evento: KeyboardEvent){
    this.nivelDep =  parseInt((<HTMLInputElement>evento.target).value);
  }
  Validacao(pos){
    if(this.palavraParaDecriptar.charAt(pos) == '' || this.palavraParaDecriptar.charAt(pos) == undefined){
      return false;
    }
    return true;

  }

}
