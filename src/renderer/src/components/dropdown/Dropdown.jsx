import { useEffect, useRef, useState } from 'react'
import symbols from '../../data/symbols.js'
import './dropdown.css'

const Dropdown = ({ value, set }) => {
  const [isOpen, setIsOpen] = useState(false)

  const triggerRef = useRef(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function dropdownClose() {
      if (dropdownRef.current) {
        dropdownRef.current.classList.add('inactive')
        document.removeEventListener('click', dropdownClose)
      }
    }

    if (isOpen) {
      if (dropdownRef.current) {
        dropdownRef.current.classList.remove('inactive')
        document.addEventListener('click', dropdownClose)
      }
    }

    return () => {
      document.removeEventListener('click', dropdownClose)
    }
  }, [isOpen])

  const handleTriggerClick = (event) => {
    event.stopPropagation()
    setIsOpen(!isOpen)
  }

  return (
    <div className="trigger" id="fromTrigger" ref={triggerRef} onClick={handleTriggerClick}>
      <p id="fromCurrency" className='z-0'>{value}</p>
      <div
        className={`dropdown z-10 shadow-md rounded-md inactive top-full left-0 absolute overflow-x-hidden overflow-y-scroll dropdown ${
          isOpen ? '' : 'inactive'
        }`}
        id="fromDropdown"
        ref={dropdownRef}
      >
        <ul className="dropdown-list z-10 h-48 w-full">
          {symbols.map((symbol, index) => {
            return (
              <li className={`dropdown-item z-10${symbol === value} ? " active" : ""`} key={index} onClick={() => set(symbol)}>
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
