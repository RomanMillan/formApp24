import { Component, ViewChild } from '@angular/core';
import { SideMenuComponent } from '../../shared/side-menu/side-menu.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-basicos',
  standalone: true,
  imports: [SideMenuComponent, FormsModule, JsonPipe, CommonModule],
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {
  @ViewChild('myForm') myForm!: NgForm

  isLetter(test: string):void{
    const pattern = new RegExp('^[A-Z]+$', 'i');
    if (!pattern.test(test)){
      this.myForm?.controls['product']?.setErrors({'product': true})

    }
    // else{
    //   this.myForm?.controls['product']?.setErrors(null)
    // }
  }


  notValid(field: string): boolean{
    return this.myForm?.controls[field]?.invalid && this.myForm?.controls[field]?.touched
  }

  submit(){
      console.log(this.myForm)
  }
}
