import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { BookState } from './bookState'

export const useBookStore = create<BookState>()(
  persist<BookState>(
    (set) => ({
      books:[],
      reading: [],
      setBooks: (books) => set({ books })
    }),
    {
      name: 'book',
    }
  )
)
