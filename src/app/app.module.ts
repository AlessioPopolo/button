import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SearchPipeModule} from "ng2-search-filter";
import { FormsModule} from "@angular/forms";
import { PaginationPipe} from "./pagination.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TableComponent,
    PaginationPipe
  ],
  imports: [
    NgbModule,
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule,
    FontAwesomeModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
