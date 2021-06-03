import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input()
  user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  getPosts(): void {
    this.router.navigate([this.user.id, 'posts'], {relativeTo: this.activatedRoute, state: {id: this.user.id}})
  }
}
