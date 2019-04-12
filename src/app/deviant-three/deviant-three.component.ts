import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deviant-three',
  templateUrl: './deviant-three.component.html',
  styleUrls: ['./deviant-three.component.scss']
})
export class DeviantThreeComponent implements OnInit {

  show: boolean;
  modale() {
    this.show = !this.show;
  }
  constructor() { }

  ngOnInit() {
  }

}
