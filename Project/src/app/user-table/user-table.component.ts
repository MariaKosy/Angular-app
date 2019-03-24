import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';
// import{MatTableDataSource} from '@angular/material';




@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'], 
  providers:[UsersService]
})
export class UserTableComponent implements OnInit {

  public users: Array <any>;
  
  constructor(private usersService: UsersService) { 
    usersService.getUsers()
    .subscribe(users => this.users = users);
  }

 

  ngOnInit() {
  }

}

