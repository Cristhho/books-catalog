import { useMemo } from 'react'

import { Book } from '@/model'
import { useBookStore } from '@/store/book/bookStore'

export const useFilteredBooks = (genre: string) => {
  const books = useBookStore(state => state.books)
  const filteredBooks = useMemo<Book[]>(() => {
    if (!genre) {
      return books
    } else {
      return books.filter((book) => book.genre === genre)
    }
  }, [books, genre])

  return filteredBooks
}