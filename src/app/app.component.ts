import { Component } from '@angular/core';
import {myButtonConfig} from "./model/MyButtonConfig";
import {myTableConfig} from "./model/MyTableConfig";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'button and table';
  buttonConfig = myButtonConfig
  tableConfig = myTableConfig
}
