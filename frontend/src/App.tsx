import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppNavbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Navbar en la parte superior */}
      <AppNavbar />
      <div>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <a href="https://media1.tenor.com/m/1iSARWJr-TEAAAAC/among-us-twerk.gif" target="_blank" rel="noopener noreferrer">
          <img src="https://media1.tenor.com/m/1iSARWJr-TEAAAAC/among-us-twerk.gif" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
