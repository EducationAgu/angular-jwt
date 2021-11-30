import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {MaterialService} from '../shared/classes/material.service';
import {AuthService} from '../shared/services/auth.service';
// @ts-ignore
import * as forge from 'node-forge';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  aSub!: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute ) {
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })


    this.route.queryParams.subscribe( () => (params: Params) => {
      if (params['accessDenied']) {
        MaterialService.toast('Надо авторизоваться в системе')
      }
    })
  }

  onSubmit(): void {
    this.form.disable()
    console.log(this.form.value);
    this.aSub =
      this.auth.rsaKey().subscribe(
        (key) => {
          console.log(key)
          const rsaKey = forge.pki.publicKeyFromPem(key);
          // @ts-ignore
          console.log(this.form.value.password);
          // @ts-ignore
          this.form.value.password = window.btoa(rsaKey.encrypt(this.form.value.password));
          this.auth.login(this.form.value).subscribe(
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
