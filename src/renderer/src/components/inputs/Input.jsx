import Dropdown from '../dropdown/Dropdown'
import './input.css'

const Input = ({ currency, value, ...props }) => {
  const onChangeHandler = event => {
    let input = event.target.value;

    input = parseFloat(input) 
    input = input.toFixed(4)
    input = parseFloat(input)
    value.set(input)
  }
  return (
    <div className="currency grid grid-cols-3">
      <Dropdown value={currency.value} set={currency.set} />
      <input
        onChange={onChangeHandler}
        value={value.value}
        id="from"
        type="number"
        min={0}
        step={0.0001}
        className="w-full p-2 col-span-2"
        {...props}
      />
    </div>
  )
}

export default Input
