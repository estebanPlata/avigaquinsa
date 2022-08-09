import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { __decorate } from 'tslib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  number:any= 0;
  constructor() { }
    
  ngOnInit(): void {
  }
  navBar(n:any){
    const onLoad:any                        = document.querySelector('#loader');
    let ListaMenu:any                       = document.querySelectorAll('.listaMenu');
    onLoad.style.display = "block";
    setTimeout(function(){
      onLoad.style.display = "none";
    },1500)
    console.log(n)
    for(let i=0; i<ListaMenu.length; i++){
      if(n==i){
        ListaMenu[i].style.textDecoration= "underline"
      }else{
        ListaMenu[i].style.textDecoration="none"
      }
    }
  }
  menu(){
    const lineaBarMenu1:any                 = document.querySelector('.linea-bar-menu1');
    const lineaBarMenu2:any                 = document.querySelector('.linea-bar-menu2');
    const lineaBarMenu3:any                 = document.querySelector('.linea-bar-menu3');
   
    lineaBarMenu1.classList.toggle("activeLinea-bar-menu1");
    lineaBarMenu2.classList.toggle("activeLinea-bar-menu2");
    lineaBarMenu3.classList.toggle("activeLinea-bar-menu3"); 
    
    this.lightBox()
    this.navBar(5)
}
lightBox(){
  const menuLightBox:any                     = document.querySelector('.menu-light-box');
  menuLightBox.classList.toggle("activeMenu-light-box");
  this.number = this.number + 1;
  console.log(this.number)
  if(this.number%2==0){
    setTimeout(function(){
      menuLightBox.style.display = "none";
    },1500)
  }
  else if(this.number){
      menuLightBox.style.display = "flex";
  } 
}
}
