import { Component } from '@angular/core';
import {CookieService} from 'ngx-cookie-service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';
  constructor(private cookie:CookieService){
    this.cookie.set('SameSite','None')
  }
}
