import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deviant-one',
  templateUrl: './deviant-one.component.html',
  styleUrls: ['./deviant-one.component.scss']
})
export class DeviantOneComponent implements OnInit {

  show: boolean;
  modale() {
    this.show = !this.show;
  }

  constructor() { }

  ngOnInit() {
  }

}
