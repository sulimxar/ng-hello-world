import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, AbstractControl } from "@angular/forms";
import { PasswordValidators } from "./password.validators";

@Component({
  selector: 'password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      oldPassword: ['', [Validators.required], PasswordValidators.wrongPassword],
      newPassword: ['', Validators.required],
      confirmedPassword: ['', [Validators.required, PasswordValidators.equalPasswords(this.getNewPasswordValue.bind(this))]]
    });
  }

  getNewPasswordValue(): string {
    return this.newPassword == null ? "" : this.newPassword.value as string;
  }

  get oldPassword(): AbstractControl{
    return this.form.get('oldPassword');
  }

  get newPassword(): AbstractControl{
    if (this.form){
      return this.form.get('newPassword');
    }
    return null;
  }

  get confirmedPassword(): AbstractControl{
    return this.form.get('confirmedPassword');
  }

  newPasswordChanged(){
    this.confirmedPassword.setValue("");
  }

  ngOnInit() {
  }

}
