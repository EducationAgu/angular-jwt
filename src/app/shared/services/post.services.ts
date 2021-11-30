import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Post } from "./interfaces";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class PostService {

    constructor(private http:HttpClient) {

    }

    fetch(): Observable<Post[]>{
        return this.http.get<Post[]>(`/api/post`)
    }

}
