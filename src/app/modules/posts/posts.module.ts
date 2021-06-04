import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import {PostsService} from "./services/posts.service";
import { PostComponent } from './components/post/post.component';
import { CommentsOfPostComponent } from './components/comments-of-post/comments-of-post.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    CommentsOfPostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [PostsService]
})
export class PostsModule { }
