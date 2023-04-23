import {Component, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private readonly builder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.builder.group({
      'email': [null],
      'password': [null]
    });
  }

  onSubmit(formData: FormGroup, loginDirective: FormGroupDirective) {
    const email = formData.value.email;
    const password = formData.value.password;
  }

}
