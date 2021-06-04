import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comments-of-post',
  templateUrl: './comments-of-post.component.html',
  styleUrls: ['./comments-of-post.component.css']
})
export class CommentsOfPostComponent {
  comments: any[];
  id: any;

  constructor(private commentsOfPost: PostsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.id = this.router.getCurrentNavigation()?.extras.state;

      this.commentsOfPost.getCommentsOfPost(this.id.id).subscribe(comments => this.comments = comments);
    })
  }

}
