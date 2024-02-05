import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidatorsService } from '../../shared/validators/validators.service';
import { ValidateEmailService } from '../../shared/validators/validate-email.service';
import { UserService } from '../../services/user.service';
import { UserRegister } from '../../interfaces/userRegister';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit{

  user: UserRegister={
    name: '',
    email: '',
    login:'',
    password:''
  }

  constructor(
    private fb: FormBuilder, 
    private validatorsService: ValidatorsService,
    private emailValidatorService: ValidateEmailService,
    private userService: UserService
  ){}

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.nameSurnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidatorService]],
    login: ['', [Validators.required, this.validatorsService.forbiddenNameValidator('fran')]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  },{validators: [this.validatorsService.equalFields('password', 'confirmPassword')]})

  ngOnInit(): void {
    this.myForm.valueChanges
    .subscribe(({confirmPassword, ...user})=>{
      this.user = user
    })
  }


  invalidField(field: string){
    return this.myForm.get(field)?.invalid 
            && this.myForm.get(field)?.touched;

  }

  get emailErrorMsg():string{
    const errors = this.myForm.get('email')?.errors;
    let errorMsg = '';
    if(errors){
      if(errors['required']){
        errorMsg = 'El email es obligatorio';
      }else if(errors['pattern']){
        errorMsg = 'El email no tiene formatio de correo';
      }else if(errors['emailTaken']){
        errorMsg = 'El email ya está en uso';
      }
    }
    return errorMsg;
  }

  submit(){
    this.myForm.markAllAsTouched();
    if(this.myForm.valid){
      this.userService.addUser(this.user)
      .subscribe({
        next: user => this.user = user
      })
    }
  }

}
