import { Book } from '@/model'
import { useBookStore } from '@/store/book/bookStore'

type Props = {
  book: Book
}

export const ReadingBook = ({ book }: Props) => {
  const removeFromRead = useBookStore(state => state.removeFromRead)

  return (
    <div className='cursor-pointer' onClick={() => removeFromRead(book.ISBN)}>{book.title}</div>
  )
}
