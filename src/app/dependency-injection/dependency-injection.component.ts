import {Component, Inject, OnInit} from '@angular/core';
import {VideoDBService} from '../shared/video-db.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent implements OnInit {

  videos = [];
  injizierterString: string;

  constructor(private datenbank: VideoDBService, @Inject('InjectString') injectString: string  ) {
    this.videos = this.datenbank.getVideos();
    console.log(injectString);

    this.injizierterString = injectString;
  }

  ngOnInit(): void {
  }

}
