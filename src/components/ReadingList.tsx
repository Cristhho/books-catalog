import { Book } from '@/model'
import { ReadingBook } from './ReadingBook'

type Props = {
  books: Book[]
}

export const ReadingList = ({ books }: Props) => {
  return (
    <>
      <h3 className='text-2xl font-bold text-center'>Reading list</h3>
      <div className='flex flex-col space-y-2'>
        {
          books.map((book) => (
            <ReadingBook key={book.ISBN} book={book} />
          ))
        }
      </div>
    </>
  )
}
