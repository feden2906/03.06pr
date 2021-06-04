import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input()
  post: Post;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  getComments(): void {
    this.router.navigate([this.post.id, 'comments'], {
      relativeTo: this.activatedRoute,
      state: {id: this.post.id}
    });
  }

}
