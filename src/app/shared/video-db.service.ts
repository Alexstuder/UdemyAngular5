import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoDBService {

  videos: string[];

  constructor() {
    this.videos = ['Angular', 'JS', 'TS', 'Java'];
  }

  getVideos(): Array<string> {
    return this.videos;
  }
}
