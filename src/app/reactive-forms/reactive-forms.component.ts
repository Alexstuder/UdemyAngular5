import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

// noinspection DuplicatedCode
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  loginForm = new FormGroup({
    groupName: new FormGroup({
      nachname: new FormControl(),
      vorname: new FormControl()
    }),
    eMail: new FormControl(),
    password: new FormControl()
  });

  inputNachname: string;
  inputVorname: string;
  inputEmail: string;
  inputPassword: string;
  status: string;

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
    this.inputPassword = this.loginForm.value.password;
    if (this.loginForm.valid) {
      this.status = 'valid';
    } else {
      this.status = 'false';
    }


  }
}
