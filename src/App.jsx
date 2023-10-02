import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  function hancleClick () {
    setCount(count+1)
  }

  return (
    <>
      <Header author={'dewa'} />
      <div className="card">
        <button onClick={() => hancleClick()}>
          count is = {count}
        </button>
      </div>
    </>
  )
}

export default App
