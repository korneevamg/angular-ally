import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive],
})
export class NavigationComponent {
  menuItems = [
    { url: 'new-book', title: 'New book' },
    { url: 'books', title: 'Books' },
    { url: 'about', title: 'About Accessible Reads' },
  ];
}
