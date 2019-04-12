import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deviant-two',
  templateUrl: './deviant-two.component.html',
  styleUrls: ['./deviant-two.component.scss']
})
export class DeviantTwoComponent implements OnInit {

  show: boolean;
  modale() {
    this.show = !this.show;
  }
  constructor() { }

  ngOnInit() {
  }

}
