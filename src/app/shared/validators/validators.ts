import { FormControl } from "@angular/forms";


export const nameSurnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'
export const emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const forbiddenNameValidator = (username: string) => {

  return (control: FormControl) => {
    const usernameInput : string = control.value.trim().toLowerCase();
    if(usernameInput === username){
      return { usernameForbidden: true};
    }

    return null;
  }
}