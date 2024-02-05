import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


interface Person  {
  genero: string,
  notificaciones: boolean
}

@Component({
  selector: 'app-switches-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit {
  
  constructor(private fb: FormBuilder){}

  myForm: FormGroup = this.fb.group({
    genero: ['F', Validators.required], 
    notificaciones: [ false, Validators.required],
    terminos: [ null, Validators.requiredTrue]

  })

  person : Person = {
    genero: 'M',
    notificaciones: false
  }

  ngOnInit(): void {
    this.myForm.setValue({
      ...this.person,
      terminos: false
    })

    this.myForm.valueChanges
    .subscribe( ({terminos, ...person}) => {
      // delete values.terminos
      this.person = person
    })
  }

  submit(){
    console.log(this.myForm.value)
    const {terminos, ...person} = this.myForm.value
    // const { genero, notificaciones} = this.myForm.value
    // this.person = { genero, notificaciones}
    this.person = person
    
  }

}
