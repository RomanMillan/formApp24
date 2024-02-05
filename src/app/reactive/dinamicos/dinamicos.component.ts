import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {
  constructor(private fb: FormBuilder){}

  get favourites(){
    return this.myForm.get('favourites') as FormArray
  }

  newFavourite : FormControl = this.fb.control('', Validators.required);

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favourites: this.fb.array([
      ['Estrella Galicia', Validators.required],
      ['Alhambra', Validators.required]
    ], Validators.required)
  })

  add(){
    if (this.newFavourite.valid) {
      this.favourites.push(this.fb.control(this.newFavourite.value, Validators.required))
      // this.favourites.push(this.newFavourite)
      this.newFavourite.reset()
    }
  }

  delete(i: number){
    this.favourites.removeAt(i);
  }
}
