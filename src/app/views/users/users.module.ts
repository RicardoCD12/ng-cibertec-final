import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { FormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RouterModule } from '@angular/router';
import { UserService } from './shared/services/user.service';
import { UserFormComponent } from './shared/forms/user-form/user-form.component';

@NgModule({
  declarations: [
    CreateUserComponent, 
    EditUserComponent, 
    ListUserComponent, 
    UserFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ListUserComponent
  ],
  providers:[
    UserService
  ]
})
export class UsersModule { }
