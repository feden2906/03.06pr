import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {PostsOfUserComponent} from "./components/posts-of-user/posts-of-user.component";

const routes: Routes = [
  {path: '', component: UsersComponent, children: [
      {path: ':id/posts', component: PostsOfUserComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
