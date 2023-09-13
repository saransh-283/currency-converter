import { useState } from 'react'
import './App.css'
import Input from './components/inputs/Input'

function App() {
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')

  return (
    <div id="container" className="shadow-md w-min rounded-md">
      <p id="title" className="uppercase text-center text-primary whitespace-nowrap">
        Currency Converter
      </p>

      <div className="grid md:grid-cols-7 gap-6">
        <Input value={from} set={setFrom} />
        <Input value={to} set={setTo} />
      </div>
    </div>
  )
}

export default App
