import { Component } from '@angular/core';
import {myConfig} from "./model/MyButtonConfig";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'button';
  buttonConfig = myConfig
}
