import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentM} from "../models/CommentM";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient: HttpClient) { }

  getComments(): Observable<CommentM[]> {
    return this.httpClient.get<CommentM[]>(this.url);
  }
}
