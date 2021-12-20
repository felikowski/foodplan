import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public route: ActivatedRoute, public location: Location) { }
  links = [
    { title: 'Home', routerLink: 'home' },
    { title: 'Rezepte', routerLink: 'recipelist' },
    { title: 'Zutaten', routerLink: 'ingredientslist'},
    { title: 'Planer', routerLink: 'planner'},
    { title: 'Profil', routerLink: 'profile'}
  ];
  ngOnInit(): void {
  }

}
