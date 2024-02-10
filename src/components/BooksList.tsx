import { Book as BookModel } from '@/model'
import { Book } from './Book'

type Props = {
  books: BookModel[]
}

export const BooksList = ({ books }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {
        books.map((book) => (
          <Book key={book.ISBN} book={book} />
        ))
      }
    </div>
  )
}
