import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Essensplaner';

  httpResponse: Observable<string>;

  constructor(private http: HttpClient, public route: ActivatedRoute, public auth: AuthService) {}

  ngOnInit() {
    this.httpResponse = this.http.get('http://localhost:3000', {
      responseType: 'text',
    });
  }
}
