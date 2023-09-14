import { useEffect, useState } from 'react'
import { ArrowsRightLeftIcon, XCircleIcon } from '@heroicons/react/24/solid'
import './App.css'
import Input from './components/inputs/Input'
import Loader from './components/Loader'
import getExchangeRate from './services/getExchangeRate'

function App() {
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')
  const [loading, setLoading] = useState(false)

  const changeHandler = async () => {
    setLoading(true)
    const res = await getExchangeRate(from, to)
    console.log(res);
    setLoading(false)
  }

  useEffect(() => {
    changeHandler()
  }, [from, to])

  return (
    <div id="container" className="shadow-md w-min rounded-md space-y-4 relative m-2">
      <p id="title" className="uppercase text-center text-primary whitespace-nowrap">
        Currency Converter
      </p>

      <div className="grid grid-rows-3 gap-6 place-items-center">
        <Input value={from} set={setFrom} />
        {loading ? (
          <Loader />
        ):
          <ArrowsRightLeftIcon className="h-6 w-6 rotate-90" />}
        <Input value={to} set={setTo} />
      </div>

      <div className="absolute -top-2 right-1">
        <XCircleIcon onClick={() => {
          api.quit();
        }} className="h-5 w-5 text-gray hover:text-red-500 cursor-pointer" />
      </div>
    </div>
  )
}

export default App
