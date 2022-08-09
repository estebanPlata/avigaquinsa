import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.imgOver(0,'white','gray');
  }
  imgOver(n:any,color:any, color2:any){
    let indraGridItem            = document.querySelectorAll('.indra-grid-item')
    let showImg:any              = document.querySelectorAll('.show-img')
    let showText:any             =document.querySelectorAll('.show-text')
    let infraGrid1:any           =document.querySelector('#infraId')
    let infraGrid2:any           =document.querySelector('#infraId2')
    for(let i=0; i<indraGridItem.length; i++){
      if(n==i){
        showImg[i].style.display = "block"
        infraGrid1.style.backgroundColor = color
        infraGrid2.style.backgroundColor = color2
        showText[i].style.display="block"
      }else{
        showImg[i].style.display = "none"
        infraGrid1.style.backgroundColor = "none"
        showText[i].style.display="none"
      }
    }
  }
}
