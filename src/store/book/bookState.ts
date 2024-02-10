import { Book } from '@/model'

export interface BookState {
  books: Book[];
  reading: Book[];
  setBooks: (books: Book[]) => void,
  addToRead: (isbn: string) => void
}
