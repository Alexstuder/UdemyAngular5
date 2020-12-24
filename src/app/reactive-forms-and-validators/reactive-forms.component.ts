import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

// noinspection DuplicatedCode
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  loginForm = new FormGroup({
    groupName: new FormGroup({
      nachname: new FormControl('DefaultName'),
      vorname: new FormControl(null, Validators.min(10))
    }),
    eMail: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl()
  });

  inputNachname: string;
  inputVorname: string;
  inputEmail: string;
  inputPassword: string;
  status: string;
  statusEmail: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.loginForm);
    console.log(this.loginForm.value.groupName.nachname);
    this.inputNachname = this.loginForm.value.groupName.nachname;
    this.inputVorname = this.loginForm.value.groupName.vorname;
    this.inputEmail = this.loginForm.value.eMail;

    if (this.loginForm.controls.eMail.valid){
      this.statusEmail = 'eMail has a valid format';
    } else {
      this.statusEmail = 'Not a valid eMail format';
    }
    this.inputPassword = this.loginForm.value.password;
    if (this.loginForm.valid) {
      this.status = 'valid';
    } else {
      this.status = 'false';
    }
  }

  resetPwd(): void {
    this.loginForm.controls.password.reset();
  }
  resetAll(): void {
    this.loginForm.reset();
  }
}
