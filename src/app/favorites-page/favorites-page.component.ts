import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { PostModalComponent } from '../post-modal/post-modal.component';
import {Post, Posts} from '../shared/services/interfaces';
import { PostService } from '../shared/services/post.services';
import { Request } from "../shared/classes/request";

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  @ViewChild(PostModalComponent) menu!: PostModalComponent;
  form!: FormGroup;
  formSort!: FormGroup;
  posts$: Observable<Posts> | undefined
  aSub!: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getSearch(new Request())

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

    req.favOnly = true;

    this.posts$ = this.postService.getSearch(req)

    this.form.enable()
  }

  onSubmitSort(): void {
    this.formSort.disable()
// TODO

    this.formSort.enable()
  }

  openMenuEdit(e: MouseEvent, data:Post) {
    this.menu.openEdit(e, data)
  }


  delete(data: Post) {
    //удалить из избранного
  }



}
