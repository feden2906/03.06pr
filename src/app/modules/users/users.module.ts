import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "./services/users.service";
import { UserComponent } from './components/user/user.component';
import {PostsModule} from "../posts/posts.module";

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    PostsModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
