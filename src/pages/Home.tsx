import { BooksList } from '@/components/BooksList'
import { useBookStore } from '@/store/book/bookStore'

export const Home = () => {
  const books = useBookStore(state => state.books)
  console.log(books)

  return (
    <div className='py-4 flex flex-row space-x-4'>
      <div className='basis-10/12'>
        <BooksList books={books} />
      </div>
      <div className='basis-2/12'>
        Reading...
      </div>
    </div>
  )
}
