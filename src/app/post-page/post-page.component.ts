import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Post, Posts} from '../shared/services/interfaces';
import { PostService } from './../shared/services/post.services';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { PostModalComponent } from '../post-modal/post-modal.component';
import { Request } from '../shared/classes/request'

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  @ViewChild(PostModalComponent) menu!: PostModalComponent;
  form!: FormGroup;
  formSort!: FormGroup;
  posts$: Observable<Posts> | undefined
  aSub!: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    let req = new Request();
    this.posts$ = this.postService.getSearch(req)

    this.form = new FormGroup({
      searchLine: new FormControl(null, Validators.required),
    })

    this.formSort = new FormGroup({
      sort: new FormControl(null, Validators.required),
    })
  }

  onSubmit(): void {
    this.form.disable()
    let req = new Request();
    req.filter = this.form.value.searchLine;
    this.posts$ = this.postService.getSearch(req)
    this.form.enable()
  }

  onSubmitSort(): void {
    this.formSort.disable()
    this.formSort.enable()
  }

  onChangePage(page: number): void {
    let req = new Request();
    req.filter = this.form.value.searchLine;
    req.paging.skip = 10 * page;
    this.posts$ = this.postService.getSearch(req)
  }

  openMenuEdit(e: MouseEvent, data:Post) {
    this.menu.openEdit(e, data)
  }

  openMenuAdd(e: MouseEvent) {
    this.menu.openAdd(e)
  }

  add(data:Post) {
    // добавить в избранное
  }

  delete(data: Post) {
    //удалить
  }
}
