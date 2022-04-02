import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../shared/services/interfaces';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent implements OnInit {

  @HostBinding("style.visibility") visibility = "hidden"
  @Input() @HostBinding("style.width") width = "600px"
 
  form!: FormGroup;

  constructor() { }

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
    // редактировать, добавить
    this.form.enable()
    this.visibility = "hidden"
  }

}
