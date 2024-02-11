import { IoMdCloseCircleOutline } from 'react-icons/io'

import { Book } from '@/model'
import { useBookStore } from '@/store/book/bookStore'

type Props = {
  book: Book
}

export const ReadingBook = ({ book }: Props) => {
  const removeFromRead = useBookStore(state => state.removeFromRead)

  return (
    <div className='flex flex-row justify-between items-center space-x-2'>
      <span className='text-lg'>{book.title}</span>
      <IoMdCloseCircleOutline
        className='cursor-pointer'
        size={24}
        onClick={() => removeFromRead(book.ISBN)} />
    </div>
  )
}
