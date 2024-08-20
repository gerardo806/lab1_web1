import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  private companiero1: string = "Daniel Trujillo";
  private companiero2: string = "Edin Ayala";
  private companiero3: string = "Cristian Flores";

  getCompaniero1(){
    return this.companiero1;
  }

  getCompaniero2(){
    return this.companiero2;
  }

  getCompaniero3(){
    return this.companiero3;
  }
}
