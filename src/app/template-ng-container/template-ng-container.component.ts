import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ng-container',
  templateUrl: './template-ng-container.component.html',
  styleUrls: ['./template-ng-container.component.css']
})
export class TemplateNgContainerComponent implements OnInit {

  paisSel: string;
  paisesEuropa = ['España', 'Francia', 'Portugal'];
  paisesAsia = ['Japón', 'China', 'Corea'];
  europa = true;
  asia = false;

  constructor() { }

  ngOnInit() {
  }

  cambiarCont(){
    this.europa = !this.europa;
    this.asia = !this.asia;
  }

}
