import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-posts-of-user',
  templateUrl: './posts-of-user.component.html',
  styleUrls: ['./posts-of-user.component.css']
})
export class PostsOfUserComponent {
  posts: any[];
  id: any;

  constructor(private postsOfUserService: UsersService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.id = this.router.getCurrentNavigation()?.extras.state;
      this.postsOfUserService.getPostsOfUser(this.id.id).subscribe(posts => this.posts = posts);
    })
  }

}
