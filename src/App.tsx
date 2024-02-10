import './App.css'
import { useBooks } from './hooks/useBooks'

function App() {
  const { error, isPending } = useBooks()

  if (error) return <p>{error.message}</p>
  else if (isPending) return 'loading...'

  return (
    <h1 className="text-3xl font-bold underline">
      Books
    </h1>
  )
}

export default App
