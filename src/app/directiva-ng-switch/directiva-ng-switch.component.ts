import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-switch',
  templateUrl: './directiva-ng-switch.component.html',
  styleUrls: ['./directiva-ng-switch.component.css']
})
export class DirectivaNgSwitchComponent implements OnInit {

  jugadores = [
    {nombre: 'Magic Johnson', equipo: 'lakers'},
    {nombre: 'Larry Bird', equipo: 'celtics'},
    {nombre: 'Michael Jordan', equipo: 'bulls'},
    {nombre: 'Kareem Abdul Jabbar', equipo: 'lakers'},
    {nombre: 'Sergio Ramos', equipo: 'Real Madrid'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
