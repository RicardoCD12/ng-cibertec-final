import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import User from '../user.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit, OnDestroy {

  createSubs: Subscription;

  constructor(
  private usersService: UserService,
  private router: Router) { }

  ngOnInit() {
  }

  onSubmit(user: User){
    this.usersService.createUser(user).subscribe((user: User) =>{
    this.router.navigate(['/users']);
    });
  }

  ngOnDestroy(){
    if(this.createSubs){
      this.createSubs.unsubscribe();
    }
  }

}