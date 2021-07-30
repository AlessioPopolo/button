import {Component, Input, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {MyTableConfig} from "../model/MyTableConfig";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  @Input() tableConfig!:MyTableConfig;
  @Input() data!:any;

  constructor() { }

  ngOnInit(): void {

  }

}
