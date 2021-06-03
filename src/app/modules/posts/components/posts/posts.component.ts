import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {Post} from "../../models/Post";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  id: any;

  constructor(private postsServices: PostsService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.id = this.router.getCurrentNavigation()?.extras.state as any;
      this.postsServices.getPostsOfUsers(this.id.id).subscribe(posts => this.posts = posts);
    })
  }

  ngOnInit(): void {
    this.postsServices.getPosts().subscribe(posts => this.posts = posts);
  }

}
