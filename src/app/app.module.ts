import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewBookComponent } from './new-book/new-book.component';
import { BooksComponent } from './books/books.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { A11yModule } from '@angular/cdk/a11y';
import { BookItemComponent } from './books-item/book-item.component';
import { TitleStrategy } from '@angular/router';
import { CustomTitleStrategy } from './a11y-title-strategy';

@NgModule({
  declarations: [
    AppComponent,
    NewBookComponent,
    BooksComponent,
    AboutComponent,
    BookItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, A11yModule],
  providers: [{ provide: TitleStrategy, useClass: CustomTitleStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
