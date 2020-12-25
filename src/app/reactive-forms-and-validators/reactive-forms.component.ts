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
      nachname: new FormControl('DefaultName', ReactiveFormsComponent.myValidator),
      vorname: new FormControl(null, Validators.min(2))
    }),
    eMail: new FormControl(null, [Validators.email, Validators.required]), /* übergabe der funktion nicht aufruf*/
    password: new FormControl()
  });

  inputNachname: string;
  inputVorname: string;
  inputEmail: string;
  inputPassword: string;
  status: string;
  statusEmail: string;
  statusNachname: string;

  static myValidator(control: FormControl): { [key: string]: any } {
    if (control.value == 'Studer') {
      console.log('myValidator : Studer erkannt');
      return {name: {valid: false}};
    } else {
      console.log('myValidator : kein Studer erkannt');
      return null;
    }
  }

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

    // @ts-ignore
    if (this.loginForm.controls.groupName.controls.nachname.status === 'INVALID') {
      this.statusNachname = 'NichtValid ! Nachname beinhaltet Studer!';
      console.log('Nicht Valid ! : Studer');
    } else {
      this.statusNachname = 'Valid ! Nachname beinhaltet nicht Studer!';
      console.log('Valid : nicht Studer');
    }
    if (this.loginForm.controls.eMail.valid) {
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
