import {Component, Input, OnInit} from '@angular/core';
import {MyTableConfig} from "../model/MyTableConfig";
import * as _ from "lodash";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  @Input() tableConfig!:MyTableConfig;
  @Input() data:any;
  filteredList!: any[];
  lastSortedColumn!: string;
  orderType!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.filteredList = _.orderBy(this.data,[this.tableConfig.order.defaultColumn], [this.tableConfig.order.orderType]);
    this.lastSortedColumn = this.tableConfig.order.defaultColumn;
  }

  orderBy(label: string): void {
    if (this.lastSortedColumn == label){
      this.orderType = !this.orderType;
      if(this.orderType){
        this.filteredList = _.orderBy(this.data,[label], ['asc']);
      }
      else {
        this.filteredList = _.orderBy(this.data,[label], ['desc']);
      }
    }
    else {
      this.orderType = true;
      this.filteredList = _.orderBy(this.data,[label], ['asc']);
    }
    this.lastSortedColumn = label;
  }

}
