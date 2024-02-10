import { Book as BookModel } from '@/model'
import { useBookStore } from '@/store/book/bookStore'

type Props = {
  book: BookModel
}

export const Book = ({ book }: Props) => {
  const addToRead = useBookStore(state => state.addToRead)

  return (
    <div className='cursor-pointer' onClick={() => addToRead(book.ISBN)}>
      <img className='h-full object-cover' src={book.cover} />
    </div>
  )
}
