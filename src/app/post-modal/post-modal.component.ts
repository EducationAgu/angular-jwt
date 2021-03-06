import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../shared/classes/post';
import { Posts } from '../shared/classes/post';
import {PostService} from "../shared/services/post.services";

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent implements OnInit {

  @HostBinding("style.visibility") visibility = "hidden"
  @Input() @HostBinding("style.width") width = "600px"

  form!: FormGroup;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
  }

  openEdit(e:MouseEvent, data:Post) {
    this.visibility = "visible"
    this.form = new FormGroup({
      id: new FormControl(data.id, Validators.required),
      name: new FormControl(data.name, Validators.required)
    })

    e.stopPropagation()
  }

  openAdd(e:MouseEvent) {
    this.visibility = "visible"
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required)
    })
    e.stopPropagation()
  }

  close() {
    this.visibility = "hidden"
  }

  onSubmit() {
    this.form.disable()
    let post = new Post();
    post.name = this.form.value.name;

    if (this.form.value.id) {
      post.id = this.form.value.id;
    }


    this.postService.addOrEdit(post);

    this.form.enable()
    this.visibility = "hidden"
  }

}
