import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  snapshotLinkParameter: string;

  constructor(private routes: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.snapshotLinkParameter = this.routes.snapshot.params['linkArgument'];
  }

}
