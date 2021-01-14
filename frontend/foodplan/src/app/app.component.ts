import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'foodplan';
  httpResponse: Observable<String>;
  test: string;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.httpResponse = this.http.get('http://localhost:3000', { responseType: 'text' });
    this.test = 'request was sent';
  }
}
