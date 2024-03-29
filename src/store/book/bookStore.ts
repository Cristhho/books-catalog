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
        if (reading.some((book) => book.ISBN === isbn)) return;
        
        const readBookIndex = books.findIndex((item) => item.ISBN === isbn)
        const updatedReading = [...reading, books[readBookIndex]]
        const updatedBooks = books.filter((book) => book.ISBN !== isbn)
        set({books: updatedBooks, reading: updatedReading})
      },
      removeFromRead: (isbn) => {
        const { books, reading } = get()
        const readBookIndex = reading.findIndex((item) => item.ISBN === isbn)
        const updatedBooks = [...books, reading[readBookIndex]]
        const updatedReading = reading.filter((book) => book.ISBN !== isbn)
        set({books: updatedBooks, reading: updatedReading})
      },
      getGenres: () => {
        const { books } = get()
        const genres = new Set(books.map((book) => book.genre))
        return genres
      }
    }),
    {
      name: 'book',
    }
  )
)
