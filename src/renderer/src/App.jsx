import { useState } from 'react'
import { ArrowsRightLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './App.css'
import Input from './components/inputs/Input'

function App() {
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')

  return (
    <div id="container" className="shadow-md w-min rounded-md space-y-4 relative">
      <p id="title" className="uppercase text-center text-primary whitespace-nowrap">
        Currency Converter
      </p>

      <div className="grid grid-rows-3 gap-6 place-items-center">
        <Input value={from} set={setFrom} />
        <ArrowsRightLeftIcon className="h-6 w-6 rotate-90" />
        <Input value={to} set={setTo} />
      </div>

      <div className="bg-red-500 absolute top-0 right-0 translate-x-1/2 -translate-y-2/3 rounded-full p-4 cursor-pointer"
        // onClick={() => {
        // app.quit();
        // }}
      >
        <XMarkIcon className="h-6 w-6 text-white" />
      </div>
    </div>
  )
}

export default App
