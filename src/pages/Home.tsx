import { BooksList } from '@/components/BooksList'
import { ReadingList } from '@/components/ReadingList'
import { useBookStore } from '@/store/book/bookStore'

export const Home = () => {
  const books = useBookStore(state => state.books)
  const readingBooks = useBookStore(state => state.reading)

  return (
    <div className='py-4 flex flex-row space-x-4'>
      <div className='basis-10/12'>
        <BooksList books={books} />
      </div>
      <div className='basis-2/12'>
        <ReadingList books={readingBooks} />
      </div>
    </div>
  )
}
