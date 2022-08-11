import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css']
})
export class UsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.oversubValorV2(0);
  }
  oversubValorV2(n:any){
    let subtitleValorV2:any             =document.querySelectorAll('.subtitle-valorV2')
    let textoValoresV2:any              =document.querySelectorAll('.texto-valoresV2')
    
    for(let i=0; i<subtitleValorV2.length; i++){
      if(n==i){
        console.log('entra a la funcion')
        textoValoresV2[i].style.display = 'flex'
        subtitleValorV2[i].style.textDecoration= "underline"
      }else{
        textoValoresV2[i].style.display = 'none'
        subtitleValorV2[i].style.textDecoration= "none"
      }
  }
  }
}