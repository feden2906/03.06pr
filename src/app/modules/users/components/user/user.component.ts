import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {PostsService} from "../../../posts/services/posts.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input()
  user: User;

  constructor() { }

  getPosts(): void {

  }
}
