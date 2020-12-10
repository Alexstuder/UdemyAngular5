import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-structur-directiven',
  templateUrl: './structur-directiven.component.html',
  styleUrls: ['./structur-directiven.component.css']
})
export class StructurDirectivenComponent implements OnInit {

  videos = ['Angular', 'Typescript', 'JavaScript', 'SQL'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
