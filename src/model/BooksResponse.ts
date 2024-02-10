import { Book } from './Book';

type Library = {book: Book}[]
export interface BooksResponse {
  library: Library
}

export class BooksResponseClass {
  public library: Library

  constructor (library: Library) {
    this.library = library
  }

  toBookArray(): Book[] {
    return this.library.map((item) => item.book)
  }
}
