import { Component, OnInit, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of} from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
  @Injectable({
    providedIn: 'root'
  })
  export class PruebaComponent implements Resolve<Observable<any>>{
  constructor() { }
  resolve():Observable<any>{
    return of('Route!').pipe(delay(800));
  }
}

