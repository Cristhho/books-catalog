import { useQuery } from '@tanstack/react-query'

import { useBookStore } from '@/store/book/bookStore'
import { BooksResponseClass } from '@/model/BooksResponse'
import { fetchBooks } from '@/api/booksApi'

export const useBooks = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['booksData'],
    queryFn: fetchBooks,
    select: (data) => {
      const booksData = new BooksResponseClass(data.default.library)
      return booksData.toBookArray()
    }
  })
  const setBooks = useBookStore(state => state.setBooks)

  if (data) {
    setBooks(data)
  }

  return {
    isPending,
    error
  }
}