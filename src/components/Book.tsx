import { Book as BookModel } from '@/model'
import { useBookStore } from '@/store/book/bookStore'

type Props = {
  book: BookModel
}

export const Book = ({ book }: Props) => {
  const addToRead = useBookStore(state => state.addToRead)

  return (
    <div className='cursor-pointer rounded overflow-hidden' onClick={() => addToRead(book.ISBN)}>
      <img className='h-full w-full object-cover' src={book.cover} />
    </div>
  )
}
