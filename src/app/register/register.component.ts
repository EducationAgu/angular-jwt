import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import {MaterialService} from "../shared/classes/material.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  aSub!: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute ) {
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })

  }

  onSubmit(): void {

    this.form.disable()
    console.log(this.form.value);
    this.aSub =
      this.auth.rsaKey().subscribe(
        (key) => {
          this.auth.register(this.form.value).subscribe(
            () => this.router.navigate(['/overview']),
            error => {
              MaterialService.toast(error.error.message)
              this.form.enable()
            }
          )
        },
        error => {
          MaterialService.toast(error.error.message)
          this.form.enable()
        }
      )

  }

}
