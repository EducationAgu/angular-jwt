import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {

  links = [
    {url: '/overview', name: 'Основная'},
    {url: '/post', name: 'Посты'},
    {url: '/favorites', name: 'Избранное'},
    {url: '/contacts', name: 'Контакты'}
  ]

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logout(event: Event): void {
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/login'])
  }

}
