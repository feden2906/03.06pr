import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url+ 'posts');
  }

  getPostsOfUsers(userId: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url + 'users/' + userId + '/posts');
  }
}
