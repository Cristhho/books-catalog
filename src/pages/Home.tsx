import { useState } from 'react'

import { BooksList } from '@/components/BooksList'
import { GenresFilter } from '@/components/GenresFilter'
import { ReadingList } from '@/components/ReadingList'
import { useBookStore } from '@/store/book/bookStore'
import { useFilteredBooks } from '@/hooks/useFilteredBooks'

export const Home = () => {
  const readingBooks = useBookStore(state => state.reading)
  const [selectedGenre, setSelectedGenre] = useState('')
  const filteredBooks = useFilteredBooks(selectedGenre)

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
