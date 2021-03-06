import {Component, Input, OnInit} from '@angular/core';
import {MyButtonConfig} from "../model/MyButtonConfig";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
  buttonConfig!: MyButtonConfig;

  constructor() { }

  ngOnInit(): void {
  }

}
