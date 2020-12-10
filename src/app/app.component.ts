import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UdemyAngular5';

  meinEventHandler(): void {
    window.alert('Der Event wurde in der darunterliegenden Komponent ausgelöst !');
  }
}
