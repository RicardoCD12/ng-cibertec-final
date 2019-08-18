import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import User from '../user.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnDestroy  {

user: User;
updateSubs: Subscription;

constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService : UserService
) { }

ngOnInit() {
    const {id} = this.route.snapshot.params;
    this.userService.getUser(+id).subscribe((user : User) => {
        this.user = user; 
    })
}

onSubmit(user: User){
    user.id = this.user.id;
    this.updateSubs = this.userService.updateUser(user).subscribe(() =>{
        this.router.navigate(['/users']);
    })
}

ngOnDestroy(){
    if (this.updateSubs) {
      this.updateSubs.unsubscribe();
    }
  }

}