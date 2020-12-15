import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  inputName: string ;
  inputPassword: string;

  constructor() { }

  ngOnInit(): void {
  }

  login(value: any) {
    console.log(value);
  }
}
