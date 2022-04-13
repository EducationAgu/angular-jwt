import { Component, OnInit } from '@angular/core';
import {MaterialService} from "../shared/classes/material.service";

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  refer() {
    window.open('https://web-telegram.ru')
  }

  dom() {
    window.open('https://goo.su/U7sG')
  }

  tel() {
    navigator.clipboard.writeText('85120000202')
    MaterialService.toast('Номер скопирован в буфер обмена')
  }

}
