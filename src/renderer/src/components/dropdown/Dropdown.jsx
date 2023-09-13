import { useEffect, useRef, useState } from 'react'
import symbols from '../../constants/symbols.js'
import './dropdown.css'

const Dropdown = ({ value, set }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const triggerRef = useRef(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function dropdownClose() {
      if (dropdownRef.current) {
        dropdownRef.current.classList.add('inactive')
        document.removeEventListener('click', dropdownClose)
      }
    }

    if (isDropdownOpen) {
      if (dropdownRef.current) {
        dropdownRef.current.classList.remove('inactive')
        document.addEventListener('click', dropdownClose)
      }
    }

    return () => {
      document.removeEventListener('click', dropdownClose)
    }
  }, [isDropdownOpen])

  const handleTriggerClick = (event) => {
    event.stopPropagation()
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="trigger" id="fromTrigger" ref={triggerRef} onClick={handleTriggerClick}>
      <p id="fromCurrency">{value}</p>
      <div
        className={`dropdown shadow-md rounded-md inactive top-full left-0 absolute overflow-x-hidden overflow-y-scroll dropdown ${
          isDropdownOpen ? '' : 'inactive'
        }`}
        id="fromDropdown"
        ref={dropdownRef}
      >
        <ul className="dropdown-list h-48 w-full">
          {symbols.map((symbol, index) => {
            return (
              <li className="dropdown-item" key={index} onClick={() => set(symbol)}>
                {symbol}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
