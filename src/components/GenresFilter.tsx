import { useEffect } from 'react'

import { useBookStore } from '@/store/book/bookStore'

type Props = {
  selectedGenre: string,
  onGenre: (genre: string) => void
}

export const GenresFilter = ({ selectedGenre, onGenre }: Props) => {
  const genres = useBookStore(state => state.getGenres())

  const onGenreChange = (genre: string) => {
    onGenre(genre)
  }

  useEffect(() => {
    if (!genres.has(selectedGenre)) {
      onGenreChange('')
    }
  }, [genres])

  return (
    <>
      <label htmlFor='genre' className='block text-sm font-medium text-gray-900'>Choose a genre</label>
      <select
        id='genre'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}>
        <option value=''>All</option>
        {
          [...genres].map((genre) => (
            <option key={genre} value={genre}>{genre}</option>
          ))
        }
      </select>
    </>
  )
}
