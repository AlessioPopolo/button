import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MyTableConfig} from "../model/MyTableConfig";
import {DATIMOCK, MockDataTable} from "../model/MockDataTable";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  @Input() tableConfig!:MyTableConfig;
  @Input() data!:any;

  datimock = DATIMOCK;

  constructor() { }

  ngOnInit(): void {

  }

}
