import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos = ['Angular', 'Typescript', 'JavaScript', 'SQL'];

  constructor() { }

  ngOnInit(): void {
  }

}
