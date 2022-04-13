import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../shared/services/post.services";
import {Comments} from '../shared/classes/comment'
import {Observable} from "rxjs";

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {

  form!: FormGroup
  comments$: Observable<Comments> | undefined

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      content: new FormControl(null, Validators.required),
    })

    this.comments$ = this.postService.getComments()
  }

  onSubmit(): void {
    this.postService.addComment(this.form.value.content)
  }
}
