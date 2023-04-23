import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormGroupDirective, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  fieldRequired = 'This field is required';

  constructor(private readonly builder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    console.log(emailRegex);
    this.registerForm = this.builder.group({
      'username': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.pattern(emailRegex)]),
      'password': new FormControl(null, [Validators.required, this.checkPassword]),
    });
  }

  emailErrors() {
    return this.registerForm.controls['email'].hasError('required') ? 'This field is required':
      this.registerForm.controls['email'].hasError('pattern') ? 'Not a valid email address' : '';
  }

  checkPassword(control: any) {
    const enteredPassword = control.value;
    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? {'requirements': true} : null;
  }

  getErrorPassword() {
    return this.registerForm.controls['password'].hasError('required') ? 'This field is required (The password must be at least six characters, one uppercase letter and one number)' :
      this.registerForm.controls['password'].hasError('requirements') ? 'Password needs to be at least six characters, one uppercase letter and one number' : '';
  }

  checkValidation(input: string) {
    return this.registerForm.controls[input].invalid && (this.registerForm.controls[input].dirty || this.registerForm.controls[input].touched);
  }

  public onSubmit(formData: FormGroup, formDirective: FormGroupDirective): void {
    console.log(formData.value);
    formDirective.resetForm();
    this.registerForm.reset();
  }

}
