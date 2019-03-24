import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { UserTableComponent } from './user-table/user-table.component';

import {UsersService } from './users.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataServiceService } from './api/in-memory-data-service.service';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import{NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    // MatButtonModule, MatCheckboxModule

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // MatButtonModule, MatCheckboxModule,
    NgbModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataServiceService, {dataEncapsulation: false},
  
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
