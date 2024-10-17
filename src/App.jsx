import { useState } from 'react'
import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.jsx'
import './App.css'
import Calculadora from './componentes/Calculadora.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Calculadora</h1>
      <div className="card">
        <Calculadora/>


      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PWABadge />
    </>
  )
}

export default App
