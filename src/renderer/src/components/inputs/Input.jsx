
import Dropdown from "../dropdown/Dropdown"
import "./input.css"

const Input = ({value, set}) => {
  return (
    <div class="currency col-span-3 grid grid-cols-3">
      <Dropdown value={value} set={set} />
      <input id="from" type="number" class="w-full p-2 col-span-2" />
    </div>
  )
}

export default Input