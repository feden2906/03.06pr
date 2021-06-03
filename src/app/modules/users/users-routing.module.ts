import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {PostsComponent} from "../posts/components/posts/posts.component";

const routes: Routes = [
  {path: '', component: UsersComponent, children: [
      {path: ':id/posts', component: PostsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
