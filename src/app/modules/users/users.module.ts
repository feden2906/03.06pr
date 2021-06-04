import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "./services/users.service";
import { UserComponent } from './components/user/user.component';
import {PostsModule} from "../posts/posts.module";
import { PostsOfUserComponent } from './components/posts-of-user/posts-of-user.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    PostsOfUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
