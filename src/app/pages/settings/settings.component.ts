import { Component, OnInit } from '@angular/core';
import * as settingsData from './settings.json';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent  implements OnInit {
  public zoom: any = 0;

  constructor() { }

  ngOnInit() {
   let data: any = settingsData;
    this.zoom = Number(localStorage.getItem('zoom'));
   if(this.zoom == 0) {
    this.zoom = 100;
   }
  }

  //Component.ts: 
 onzoom(event: any) {
   this.zoom = event.detail.value;
   document.body.style.setProperty("zoom", this.zoom + "%");
   localStorage.setItem('zoom', this.zoom.toString());
 }

}
