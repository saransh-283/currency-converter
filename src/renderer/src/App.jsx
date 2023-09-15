import { useEffect, useState } from 'react'
import { ArrowsRightLeftIcon, XCircleIcon } from '@heroicons/react/24/solid'
import './App.css'
import Input from './components/inputs/Input'
import Loader from './components/Loader'
import getExchangeRate from './services/getExchangeRate'

function App() {
  const [fromCurrency, setFromCurrency] = useState('INR')
  const [toCurrency, setToCurrency] = useState('USD')

  const [base, setBase] = useState("")
  const [exchange, setExchange] = useState("")

  const [exchangeRate, setExchangeRate] = useState(1)
  const [loading, setLoading] = useState(false)

  const currencyChangeHandler = async () => {
    setLoading(true)

    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency)
    setExchangeRate(exchangeRate)

    setLoading(false)
  }

  useEffect(() => {
    let temp = base * exchangeRate
    if (temp) temp = temp.toFixed(2)
    setExchange(temp)
  }, [base])

  useEffect(() => {
    currencyChangeHandler()
  }, [fromCurrency, toCurrency])

  return (
    <div id="container" className="shadow-md w-min rounded-md space-y-4 relative m-2">
      <p id="title" className="uppercase text-center text-primary whitespace-nowrap">
        Currency Converter
      </p>

      <div className="grid grid-rows-3 gap-6 place-items-center">
        <Input currency={{ value: fromCurrency, set: setFromCurrency }} value={{ value: base, set: setBase }} />
        {loading ? <Loader /> :
          <div className="rounded-full cursor-pointer p-3 bg-lightgray" onClick={() => {
            setExchange(base)
            setBase(exchange)
            setFromCurrency(toCurrency)
            setToCurrency(fromCurrency)
          }}>
            <ArrowsRightLeftIcon className="h-5 w-5 rotate-90" />
          </div>
        }
        <Input disabled currency={{ value: toCurrency, set: setToCurrency }} value={{ value: exchange, set: setExchange }} />
      </div>

      <div className="absolute -top-2 right-1">
        <XCircleIcon
          onClick={() => {
            api.quit()
          }}
          className="h-5 w-5 text-gray hover:text-red-500 cursor-pointer"
        />
      </div>
    </div>
  )
}

export default App
