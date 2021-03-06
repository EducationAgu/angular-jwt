import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Posts } from "../classes/post";
import { Comments } from "../classes/comment"
import { Post } from "../classes/post";
import { Observable } from "rxjs";
import {environment} from "@environments/environment.prod";
import {Request} from "../classes/request";
import {MaterialService} from "../classes/material.service";

@Injectable({
    providedIn:'root'
})

export class PostService {

    constructor(private http:HttpClient) {

    }

    getSearch(request: Request) : Observable<Posts>{
      return this.http.post<Posts>(`${environment.api}/api/post/all`, {request})
    }

    addOrEdit(request: Post): void {
      if (request.id) {
        this.http.patch(`${environment.api}/api/post/add`, request).subscribe( () => {},
          error => {
            console.log(error)
          })
        return
      }
      this.http.post(`${environment.api}/api/post/add`, request).subscribe( () => {},
        error => {
         console.log(error)
        })
    }

    addToFav (id: number): void {
      this.http.post(`${environment.api}/api/post/addToFav`, {id: id}).subscribe( () => {},
        error => {
          console.log(error)
        })
      return
    }

    removeFromFavorite (id: number): void {
      this.http.post(`${environment.api}/api/post/deleteFromFav`, {id: id}).subscribe( () => {},
        error => {
          console.log(error)
        })
      return
    }

    addComment(comment: string): void {
      this.http.post(`${environment.api}/api/post/com`, {comment: comment}).subscribe( () => {},
        error => {
          console.log(error)
        })
      return
    }

    getComments(): Observable<Comments> {
      return this.http.post<Comments>(`${environment.api}/api/post/getCom`, {})
    }
}
