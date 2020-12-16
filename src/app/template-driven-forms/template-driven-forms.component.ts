import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  inputNachname: string;
  inputVorname: string;
  inputEmail: string;
  inputPassword: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  login(value: any): void {
    console.log(value);
    this.inputNachname = value['groupName'] ['nachname'];
    this.inputVorname = value['groupName'] ['vorname'];
    this.inputEmail = value['eMail'];
    this.inputPassword = value['password'];
  }
}
