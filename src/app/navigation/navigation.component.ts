import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

/**https://inclusive-components.design/menus-menu-buttons/ */

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, RouterLinkActive],
})
export class NavigationComponent {
  constructor(private router: Router) {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      // Close the menu upon navigation
      if (event instanceof NavigationEnd) this.isMenuOpen = false;
    });
  }
  isMenuOpen = false;
  menuItems = [
    { url: 'new-book', title: 'New book' },
    { url: 'books', title: 'Books' },
    { url: 'about', title: 'About Accessible Reads' },
  ];

  onButtonClick() {
    console.log('onButtonClick');
    this.isMenuOpen = !this.isMenuOpen;
  }
}
