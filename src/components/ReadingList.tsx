import { Book } from '@/model'
import { ReadingBook } from './ReadingBook'

type Props = {
  books: Book[]
}

export const ReadingList = ({ books }: Props) => {
  return (
    <div>
      <h3 className='text-lg font-bold text-center'>Reading list</h3>
      {
        books.map((book) => (
          <ReadingBook key={book.ISBN} book={book} />
        ))
      }
    </div>
  )
}
