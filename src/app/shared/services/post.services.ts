import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Posts } from "../classes/post";
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

    fetch(): Observable<Posts[]>{
        return this.http.get<Posts[]>(`${environment.api}/api/post/`)
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
}
