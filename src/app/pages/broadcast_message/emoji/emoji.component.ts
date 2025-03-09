import { Component, OnInit } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss'],
})
export class EmojiComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log();
  }

}
