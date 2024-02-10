import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { BookState } from './bookState'

export const useBookStore = create<BookState>()(
  persist<BookState>(
    (set, get) => ({
      books: [],
      reading: [],
      setBooks: (books) => {
        const { reading } = get()
        const ids = reading.map((book) => book.ISBN)
        const newBooks = books.filter((book) => !ids.includes(book.ISBN))
        set({ books: newBooks })
      },
      addToRead: (isbn) => {
        const { books, reading } = get()
        const readBookIndex = books.findIndex((item) => item.ISBN === isbn)
        const updatedReading = [...reading, books[readBookIndex]]
        const updatedBooks = books.filter((book) => book.ISBN !== isbn)
        set({books: updatedBooks, reading: updatedReading})
      }
    }),
    {
      name: 'book',
    }
  )
)
