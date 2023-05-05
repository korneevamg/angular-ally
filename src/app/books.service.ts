import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Book {
  isbn: string;
  cover: string;
  title: string;
  abstract: string;
  author: string;
}

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private endpoint = 'http://localhost:4730';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.endpoint}/books`);
  }

  removeBook(book: Book) {
    return this.http.delete(`${this.endpoint}/books/${book.isbn}`);
  }
}
