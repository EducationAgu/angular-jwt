import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { Post } from '../shared/services/interfaces';
import { PostService } from './../shared/services/post.services';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MaterialService} from "../shared/classes/material.service";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  form!: FormGroup;
  posts$: Observable<Post[]> | undefined
  aSub!: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getSearch("")

    this.form = new FormGroup({
      searchLine: new FormControl(null, Validators.required),
    })
  }
  onSubmit(): void {
    this.form.disable()

    this.posts$ = this.postService.getSearch(this.form.value.searchLine)
  }
}
