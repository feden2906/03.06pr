import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {CommentsOfPostComponent} from "./components/comments-of-post/comments-of-post.component";

const routes: Routes = [
  {path: '', component: PostsComponent, children: [
      {path: ':id/comments', component: CommentsOfPostComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
