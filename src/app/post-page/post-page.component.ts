import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Post, Posts} from '../shared/classes/post';
import { PostService } from '../shared/services/post.services';
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
  currentPage: number;
  constructor(private postService: PostService) {
    this.currentPage = 0;
  }

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

    let req = new Request();
    req.filter = this.form.value.searchLine;
    req.paging.skip = 10 * this.currentPage;
    req.sort.asc = this.formSort.value.sort !== 'desc';
    req.sort.field = 'name';
    this.posts$ = this.postService.getSearch(req)

    this.formSort.enable()
  }

  onChangePage(page: number): void {
    let req = new Request();
    req.filter = this.form.value.searchLine;
    this.currentPage = page-1
    req.paging.skip = 10 * this.currentPage;
    req.sort.asc = this.formSort.value.sort !== 'desc';
    req.sort.field = 'name';

    this.posts$ = this.postService.getSearch(req)
  }

  openMenuEdit(e: MouseEvent, data:Post) {
    this.menu.openEdit(e, data)
  }

  openMenuAdd(e: MouseEvent) {
    this.menu.openAdd(e)
  }

  addToFavorite(data:Post) {
    this.postService.addToFav(data.id)
  }

  removeFromFavorite(data:Post) {
    this.postService.removeFromFavorite(data.id)
  }

  delete(data: Post) {
    //удалить
  }
}
