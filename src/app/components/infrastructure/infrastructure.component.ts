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
    this.imgOver(0);
  }
  imgOver(n:any){
    let indraGridItem            = document.querySelectorAll('.indra-grid-item')
    let showImg:any               = document.querySelectorAll('.show-img')
    let showText:any              =document.querySelectorAll('.show-text')
    for(let i=0; i<indraGridItem.length; i++){
      if(n==i){
        showImg[i].style.display = "block"
        showText[i].style.display="block"
      }else{
        showImg[i].style.display = "none"
        showText[i].style.display="none"
      }
    }
  }
}
