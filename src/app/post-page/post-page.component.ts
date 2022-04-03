import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { Post } from '../shared/services/interfaces';
import { PostService } from './../shared/services/post.services';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { PostModalComponent } from '../post-modal/post-modal.component';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  @ViewChild(PostModalComponent) menu!: PostModalComponent; 
  form!: FormGroup;
  formSort!: FormGroup;
  posts$: Observable<Post[]> | undefined
  aSub!: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getSearch("")

    this.form = new FormGroup({
      searchLine: new FormControl(null, Validators.required),
    })

    this.formSort = new FormGroup({
      sort: new FormControl(null, Validators.required),
    })
  }

  onSubmit(): void {
    this.form.disable()

    this.posts$ = this.postService.getSearch(this.form.value.searchLine)

    this.form.enable()
  }

  onSubmitSort(): void {
    this.formSort.disable()
    

    this.formSort.enable()
  }

  openMenuEdit(e, data:Post) {
    this.menu.openEdit(e, data)
  }

  openMenuAdd(e) {
    this.menu.openAdd(e)
  }

  add(data:Post) {
    // добавить в избранное
  }

  delete(data: Post) {
    //удалить
  }
}
