import { Component, OnInit } from '@angular/core';
import User from '../user.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  allUsers: User[];

  constructor(
    private userService: UserService) { 
    
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((user:User[]) => {
      this.allUsers = user;
    });
  }

  onRemove(id: number){
    this.userService.deleteUser(+id).subscribe((response) => {
      this.allUsers = this.allUsers.filter(user => user.id !== id);
    });
  }

}
