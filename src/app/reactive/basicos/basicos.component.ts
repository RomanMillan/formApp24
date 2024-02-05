import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-basicos-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  constructor(private fb: FormBuilder){}

  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('Patatas'),
  //   price: new FormControl(0),
  //   stock: new FormControl()
  // })

  myForm : FormGroup = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(1)]]
    }
  )

  isValidField(field: string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  submit(){
    if (this.myForm.valid) {
      console.log('Formulario enviado')
      this.myForm.reset({
        name: 'Tomatoes'
      })
    }
    else{
      this.myForm.markAllAsTouched();
    }
  }
}
