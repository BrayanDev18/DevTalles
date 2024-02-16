import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {

  const [valueCounter, setValueCounter] = useState(value)

  const handleCounterIncre = () => {
    setValueCounter(current => current + 1)
  }

  const handleCounterDecre = () => {
    setValueCounter(current => {
      if (current === value) return value
      return current - 1
    })
  }

  return (
    <div>
      <h1>CountApp</h1>
      <h2>{valueCounter}</h2>

      <div className='container'>

        <button onClick={handleCounterIncre}>
          +
        </button>
        <button onClick={handleCounterDecre}>
          -
        </button>
        <div className='reset' onClick={() => setValueCounter(value)}>
          Reset
        </div>
      </div>
    </div>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}