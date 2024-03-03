import { Component } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterLinkActive, RouterLink, RouterOutlet, NavigationComponent],
})
export class AppComponent {
  //Angular focus 4: Fix navigation - focus on the first header on the page + Alternative way to handle navigation
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        const mainHeader = document.querySelector('main');
        if (mainHeader) {
          (mainHeader as HTMLElement).focus();
        }
      });
  }
}
