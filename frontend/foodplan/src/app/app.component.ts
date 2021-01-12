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
  httpResponse: String;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('http://localhost:3000', { responseType : 'text'}).subscribe(result => this.httpResponse = result);
  }
}
