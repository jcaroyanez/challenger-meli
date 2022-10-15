import IcSearch from '../uiCons/UICsearch/UICsearch'
import './Search.scss'

const Search = ({ onInputValue, inputValue }) => {
  const handlerSubmit = e => {
    e.preventDefault()
    const value = e.target.textInput.value
    if (value) {
      onInputValue(value)
    }
  }

  return (
    <form onSubmit={handlerSubmit} className='content-search'>
      <input
        defaultValue={inputValue}
        autoCorrect='off'
        autoComplete='off'
        className='search-input'
        name='textInput'
        placeholder='Nunca dejes de buscar'
      />

      <button className='search-btn'>
        <IcSearch width={20} heigth={20} fill='#666' />
      </button>
    </form>
  )
}

export default Search
