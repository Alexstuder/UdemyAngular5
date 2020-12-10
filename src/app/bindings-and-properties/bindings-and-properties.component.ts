import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bindings-and-properties',
  templateUrl: './bindings-and-properties.component.html',
  styleUrls: ['./bindings-and-properties.component.css']
})
export class BindingsAndPropertiesComponent implements OnInit {

  name = 'Angular Tutorial';
  isGreenActive = true;
  isBrownActive = false;
  isDisabled = false;
  none = 'none';
  meineFarbe = 'red';
  meinEventEmitterAusloeser = 0;

  @Input() eigenschaft: string;

  @Output() meinEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  eigenschaftenClickHandler(): void {
    window.alert(this.eigenschaft);
  }

  meinEventEmitterHandler(): void {
    this.meinEventEmitterAusloeser++;
    if (this.meinEventEmitterAusloeser === 5) {
      this.meinEventEmitterAusloeser = 0;
      this.meinEvent.emit();
    }
  }

}
