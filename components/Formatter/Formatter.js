import React, { useState } from 'react'

const formatTypes = ['csv','json']

export default function Formatter () {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  function handleClick (e) {
    e.preventDefault()
    setOutput(input)
  }

  function handleFromChange (e) {
    setFrom(e.target.value)
  }

  function handleToChange (e) {
    setTo(e.target.value)
  }

  return (
    <div>
      <select value={from} onChange={handleFromChange}>
        {formatTypes.map((item) => (
          <option key={ item } value={ item }>{ item }</option>
        ))}
      </select>

      <select value={to} onChange={handleToChange}>
        {formatTypes.map((item) => (
          <option key={ item } value={ item }>{ item }</option>
        ))}
      </select>

      <textarea
        placeholder="Enter text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <textarea
        value={output}
        onChange={(e) => setOutput(e.target.value)}
      />

      <button
        onClick={handleClick}
      >
        Format
      </button>
    </div>
  )
}
