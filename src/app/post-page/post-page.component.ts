import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../shared/services/interfaces';
import { PostService } from './../shared/services/post.services';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  posts$: Observable<Post[]> | undefined

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.fetch()
  }

}
