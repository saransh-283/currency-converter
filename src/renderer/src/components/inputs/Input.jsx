import Dropdown from '../dropdown/Dropdown'
import './input.css'

const Input = ({ currency, value, ...props }) => {
  return (
    <div className="currency grid grid-cols-3">
      <Dropdown value={currency.value} set={currency.set} />
      <input
        onChange={event => value.set(event.target.value)}
        value={value.value}
        id="from"
        type="number"
        min={0}
        step={0.01}
        className="w-full p-2 col-span-2"
        {...props}
      />
    </div>
  )
}

export default Input
