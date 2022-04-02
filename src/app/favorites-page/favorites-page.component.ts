import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { PostModalComponent } from '../post-modal/post-modal.component';
import { Post } from '../shared/services/interfaces';
import { PostService } from '../shared/services/post.services';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  @ViewChild(PostModalComponent) menu!: PostModalComponent; 
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

    this.form.enable()
  }

  openMenuEdit(e, data:Post) {
    this.menu.openEdit(e, data)
  }


  delete(data: Post) {
    //удалить из избранного
  }

  

}
