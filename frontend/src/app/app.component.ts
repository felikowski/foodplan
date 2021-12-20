import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Essensplaner';
  httpResponse: Observable<String>;

  constructor(private http: HttpClient, public route: ActivatedRoute, public auth: AuthService) { }
  ngOnInit() {
    this.httpResponse = this.http.get('http://localhost:3000', { responseType: 'text' });
  }
}
