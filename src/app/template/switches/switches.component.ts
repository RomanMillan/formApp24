import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Persona {
  genero: string,
  notificaciones: boolean
}

@Component({
  selector: 'app-switches',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './switches.component.html'
})
export class SwitchesComponent {
  persona: Persona = {
    genero: 'F',
    notificaciones: false
  }

  terminos: boolean = false;

  submit(){
    console.log('Se ha enviado el formulario')
  }
}
