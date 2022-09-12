import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'pepe';
  nombreCompleto: string = 'pepe alonso';

  fecha : Date = new Date();
  //Momentjs para manejar fechas

}
