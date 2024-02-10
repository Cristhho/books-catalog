import { useMemo, useState } from 'react'

import { BooksList } from '@/components/BooksList'
import { GenresFilter } from '@/components/GenresFilter'
import { ReadingList } from '@/components/ReadingList'
import { useBookStore } from '@/store/book/bookStore'
import { Book } from '@/model'

export const Home = () => {
  const books = useBookStore(state => state.books)
  const readingBooks = useBookStore(state => state.reading)
  const [selectedGenre, setSelectedGenre] = useState('')

  const filteredBooks = useMemo<Book[]>(() => {
    if (!selectedGenre) {
      return books
    } else {
      return books.filter((book) => book.genre === selectedGenre)
    }
  }, [books, selectedGenre])

  const onGenreChange = (genre: string) => {
    setSelectedGenre(genre)
  }

  return (
    <div className='py-4 flex flex-row space-x-4'>
      <div className='basis-10/12'>
        <div className='mb-5'>
          <GenresFilter selectedGenre={selectedGenre} onGenre={onGenreChange} />
        </div>
        <BooksList books={filteredBooks} />
      </div>
      <div className='basis-2/12'>
        <ReadingList books={readingBooks} />
      </div>
    </div>
  )
}
