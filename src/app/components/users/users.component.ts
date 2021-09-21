import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: any;

  constructor(private userServise: UsersService) { 

  }

  ngOnInit(): void {
    this.getData();
  }

  // obtiene todos los usuarios.
  async getData(){
   this.users = await this.userServise.getUsers();
    console.log(this.users);
  }

}
