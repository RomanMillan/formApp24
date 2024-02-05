import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  // valida que el name tenga el siguiente formato
  nameSurnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  
  //valida que el email tenga el siguiente formato 
  emailPattern : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  // valida que el nombre de usuario no es el baneado (username: Fran)
  forbiddenNameValidator (username: string): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      const usernameInput : string = control.value.trim().toLowerCase();
      if(usernameInput === username){
        return { usernameForbidden: true};
      }
      return null;
    }
  }

  // valida que dos contraseñas son iguales
  equalFields (field1: string, field2: string) : ValidatorFn{
    return (formControl: AbstractControl): ValidationErrors | null => {
      const control2 : FormControl = <FormControl>formControl.get(field2);
      
      const field1Input : string = formControl.get(field1)?.value;
      const field2Input : string = control2?.value;

      if (field1Input !== field2Input) {
        control2.setErrors({ nonEquals: true})
        return { nonEquals: true};
        
      }
      
      if(control2?.errors && control2.hasError('nonEquals')) {
        delete control2.errors['nonEquals'];
        control2.updateValueAndValidity();
      }
      // control2.setErrors(null)
      return null
    }
  }

  constructor() { }
}
