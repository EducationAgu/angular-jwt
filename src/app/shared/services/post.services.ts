import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Posts } from "./interfaces";
import { Observable } from "rxjs";
import {environment} from "@environments/environment.prod";
import {Request} from "../classes/request";

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
}
