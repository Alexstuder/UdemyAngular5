import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-structur-directiven',
  templateUrl: './structur-directiven.component.html',
  styleUrls: ['./structur-directiven.component.css']
})
export class StructurDirectivenComponent implements OnInit {

  length = 0;
  videos = ['Angular', 'Typescript', 'JavaScript', 'SQL'];
  name = 'Angular Tutorial';

  constructor() {
  }

  ngOnInit(): void {
  }

  myClickhandler() {
    this.length = this.length + 1;

  }
}
