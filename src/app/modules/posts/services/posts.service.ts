import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url);
  }

  getCommentsOfPost(id: number): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url + '/' + id + '/comments');
  }
}
