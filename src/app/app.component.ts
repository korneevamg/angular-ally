import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  TitleStrategy,
} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // TODO 3: Fix navigation - focus on the first header on the page
  //TODO 4: Alternative way to handle navigation
  constructor(
    private activatedRoute: ActivatedRoute,
    private liveannouncer: LiveAnnouncer,
    private router: Router,
    private title: Title,
    private titleStrategy: TitleStrategy
  ) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        console.log(this.title.getTitle());
        console.log(
          titleStrategy.getResolvedTitleForRoute(activatedRoute.snapshot)
        );
        this.liveannouncer.announce(this.title.getTitle());
        const mainHeader = document.querySelector('main');
        if (mainHeader) {
          (mainHeader as HTMLElement).focus();
        }
      });
  }
  ngOnInit(): void {
    this.activatedRoute.title.subscribe((pageTitle) => {
      console.log(pageTitle);
      this.liveannouncer.announce('Here goes the title');
    });
  }
}
