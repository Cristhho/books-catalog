import { useBooks } from '@/hooks/useBooks'
import { Home } from '@/pages/Home'

function App() {
  const { error, isPending } = useBooks()

  if (error) return <p>{error.message}</p>
  else if (isPending) return 'loading...'

  return (
    <main className='mx-10' role='main'>
      <Home />
    </main>
  )
}

export default App
