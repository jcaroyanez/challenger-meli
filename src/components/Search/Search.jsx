import { useState } from 'react'
import IcSearch from '../uiCons/UICsearch/UICsearch'
import './Search.scss'

const Search = ({ onInputValue, inputValue }) => {
  const [textInput, setTextInput] = useState()

  const handlerSubmit = e => {
    e.preventDefault()

    if (textInput) {
      onInputValue(textInput)
    }
  }

  const handlerChange = event => {
    setTextInput(event.target.value)
  }

  return (
    <form onSubmit={handlerSubmit} className='content-search'>
      <input
        key={inputValue}
        defaultValue={inputValue}
        onChange={handlerChange}
        autoCorrect='off'
        autoComplete='off'
        className='search-input'
        name='textInput'
        placeholder='Nunca dejes de buscar'
        tabIndex='0'
        aria-label='Ingresa lo que quieras encontrar'
      />

      <button className='search-btn' aria-label='Buscar'>
        <IcSearch width={20} heigth={20} fill='#666' />
      </button>
    </form>
  )
}

export default Search
